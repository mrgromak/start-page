/*
  Google Calendar Integration
  This script fetches events from Watkinson's public Google Calendars and displays them on the page.

  About the API Key:
  Normally, API keys should be kept secret as environment variables. However, this key is
  intentionally public because:
  - It is scoped to ONLY allow read-only access to these specific public calendars
  - Anyone with this key can only do exactly what this page already does
  - It cannot be exploited to access private data or make changes to anything
  - JavaScript runs in the browser, so there's no way to hide values from users anyway

  For projects with sensitive data or write permissions, you would use server-side code
  with environment variables to keep secrets truly secret.
*/

// API configuration
const API_KEY = "AIzaSyCpy9p1SPAqiyi7vm25fHD9AmGelU22Pe0";
const DAY_CALENDAR_ID =
  "watkinson.org_i22eegqu10q4mbjmtina5n3bm8@group.calendar.google.com";
const BLOCK_SCHEDULE_ID =
  "watkinson.org_adjmjvoj9cisaf5fvc3dhg8hu0@group.calendar.google.com";
const BASE_URL = "https://www.googleapis.com/calendar/v3/calendars";

// DOM Elements
const eventsList = document.getElementById("day-events");
const loadMoreButton = document.getElementById("load-more-events");

// Global state
let allFetchedEvents = [];
// currentEndDate determines how far into the future we load events (initially 1 month)
let currentEndDate = new Date();
currentEndDate.setMonth(currentEndDate.getMonth() + 1);
let previousEndDate = null; // Used to track the last loaded range

/**
 * Fetch events from a specific Google Calendar within a time range.
 * @param {string} calendarId - The ID of the Google Calendar.
 * @param {string} timeMin - The ISO date string for the start of the time range.
 * @param {string} [timeMax] - The ISO date string for the end of the time range.
 * @returns {Promise<Array>} - A promise that resolves to an array of event objects.
 */
async function fetchEvents(calendarId, timeMin, timeMax) {
  const url = `${BASE_URL}/${calendarId}/events?key=${API_KEY}&timeMin=${timeMin}${
    timeMax ? `&timeMax=${timeMax}` : ""
  }&singleEvents=true&orderBy=startTime`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching events: ${response.statusText}`);
    }

    const data = await response.json();
    // Return the items if present, else return an empty array
    return data.items || [];
  } catch (error) {
    // If there's an error fetching from a calendar, just return an empty array
    // so the rest of the code can continue gracefully.
    return [];
  }
}

/**
 * Combine newly fetched events with previously fetched events, ensure uniqueness by event ID,
 * and sort them chronologically.
 * @param {Array} events - Array of event objects fetched from calendars.
 */
function combineAndSortEvents(events) {
  const uniqueEvents = new Map();

  // Add both new and old events into a Map keyed by event ID to ensure no duplicates
  events.forEach((event) => uniqueEvents.set(event.id, event));
  allFetchedEvents.forEach((event) => uniqueEvents.set(event.id, event));

  // Convert back to array and sort by start date
  allFetchedEvents = Array.from(uniqueEvents.values()).sort((a, b) => {
    const startA = new Date(
      a.start.dateTime || `${a.start.date}T00:00:00`
    ).getTime();
    const startB = new Date(
      b.start.dateTime || `${b.start.date}T00:00:00`
    ).getTime();
    return startA - startB;
  });
}

/**
 * Render the combined event list into the DOM. Clears previous items and re-renders all.
 * Events are grouped by day with a date header, followed by individual events.
 * @param {Array} events - The array of event objects to render.
 */
function renderCombinedEvents(events) {
  eventsList.innerHTML = ""; // Clear the existing list
  let lastRenderedDate = null;

  events.forEach((event) => {
    // Determine event date (all-day or timed)
    const eventDate = new Date(
      event.start.dateTime || `${event.start.date}T00:00:00`
    );
    const formattedDate = eventDate.toLocaleDateString(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
    });

    // If this is a new date, insert a date header
    if (lastRenderedDate !== formattedDate) {
      lastRenderedDate = formattedDate;
      const dateHeader = document.createElement("li");
      dateHeader.textContent = formattedDate;
      dateHeader.classList.add("date-header");
      eventsList.appendChild(dateHeader);
    }

    // Create event list item
    const listItem = document.createElement("li");

    // If the event has a start time (dateTime), it's a "block" event, else it's "day" event
    if (event.start.dateTime) {
      // Timed event
      const startTime = new Date(event.start.dateTime).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const endTime = event.end?.dateTime
        ? new Date(event.end.dateTime).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        : "";

      listItem.innerHTML = `${startTime} - ${endTime}&nbsp;&mdash;&nbsp;<strong>${event.summary}</strong>`;
      listItem.classList.add("block-event");
    } else {
      // All-day event
      listItem.textContent = event.summary;
      listItem.classList.add("day-event");
    }

    eventsList.appendChild(listItem);
  });
}

/**
 * Load the initial batch of events (initially 1 month).
 * Called when the DOM is fully loaded.
 */
async function loadInitialEvents() {
  const now = new Date();
  // timeMin: start from today's date at midnight
  const timeMin = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  ).toISOString();
  const timeMax = currentEndDate.toISOString(); // 1 month from now

  // Fetch events from both calendars
  const dayEvents = await fetchEvents(DAY_CALENDAR_ID, timeMin, timeMax);
  const blockEvents = await fetchEvents(BLOCK_SCHEDULE_ID, timeMin, timeMax);

  // Combine, sort, and render them
  combineAndSortEvents([...dayEvents, ...blockEvents]);
  renderCombinedEvents(allFetchedEvents);

  // Show the "Load More" button to allow the user to fetch additional events
  loadMoreButton.style.display = "block";
}

/**
 * Load more events by extending the date range by another month.
 * Triggered when user clicks the "Load More Events" button.
 */
async function loadMoreEvents() {
  // If we have previously fetched events, we use the last event's date as a starting point
  const lastEvent = allFetchedEvents[allFetchedEvents.length - 1];

  // timeMin: start from the last event's date/time or currentEndDate if no events found previously
  const timeMin = lastEvent
    ? new Date(
        lastEvent.start.dateTime || `${lastEvent.start.date}T00:00:00`
      ).toISOString()
    : currentEndDate.toISOString();

  // Expand currentEndDate by another month to load more events
  previousEndDate = new Date(currentEndDate);
  currentEndDate.setMonth(currentEndDate.getMonth() + 1);
  const timeMax = currentEndDate.toISOString();

  // Fetch new events in this extended range
  const dayEvents = await fetchEvents(DAY_CALENDAR_ID, timeMin, timeMax);
  const blockEvents = await fetchEvents(BLOCK_SCHEDULE_ID, timeMin, timeMax);
  const newEvents = [...dayEvents, ...blockEvents];

  if (newEvents.length > 0) {
    // If we have new events, combine, sort, and re-render the entire list
    combineAndSortEvents(newEvents);
    renderCombinedEvents(allFetchedEvents);
  } else {
    // If no new events, disable the load more button
    loadMoreButton.textContent = "No More Events";
    loadMoreButton.disabled = true;
  }
}

// Event listener for Load More button
loadMoreButton.addEventListener("click", loadMoreEvents);

// Load the initial calendar data when the page loads
document.addEventListener("DOMContentLoaded", loadInitialEvents);
