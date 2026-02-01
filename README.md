# Start Page Remix - Your Amnesia Fortnight

## What Is This?

You're about to participate in your own version of **Amnesia Fortnight** - a rapid prototyping experience inspired by the game development studio Double Fine.

**Your challenge:** Remix the Watkinson Start Page using AI assistance over three classes, exploring what you can create even without deep knowledge of HTML, CSS, or JavaScript.

**The goal:** Experience the creative process of making something for the web, not to create a perfect final product.

---

## The Amnesia Fortnight Mindset

As you watched in the documentary, Amnesia Fortnight teams:
- ✅ Work on projects they've never done before
- ✅ Learn by doing, not by knowing everything first
- ✅ Embrace accidents and unexpected discoveries
- ✅ Ship *something* even if it's not perfect
- ✅ Value the experience of making over the final product

**Your approach should be the same.**

> "Momentum is more important than perfection. You just gotta share ideas and have them get either developed or shutdown, so you can move on." - Tim Schafer

---

## Getting Started

### Setup (Class 1)

1. **Create your own copy from the template**
   - Go to the template repository link (provided in Google Classroom)
   - Click the green "Use this template" button
   - This creates a copy of the project in YOUR GitHub account

2. **Create a folder for your project**
   - On your Mac, navigate to Documents > Phoenix Code
   - Create a new folder called "Start Page Remix"

3. **Get the SSH link from your repo**
   - On YOUR GitHub repo page (the copy you just made)
   - Click the green "Code" button
   - Select "SSH" tab
   - Copy the SSH link (starts with `git@github.com:`)

4. **Clone the repo in Phoenix Code**
   - Open Phoenix Code
   - Use the Start Dialog or File menu to start a new project from Git
   - Paste your SSH link
   - Select the "Start Page Remix" folder you created

5. **Test it works**
   - Open `index.html`
   - Click the lightning bolt icon (Live Preview)
   - You should see the start page in the preview pane

✅ **You're ready to start!**

---

## How to Work with AI (Your Web Dev Sidekick)

You'll be using **Gemini** (through Google Workspace) to help you modify the start page. Think of it as a collaborative teammate, like the AF leads had.

### The Workflow

**Important:** YOU are the project lead. The AI is your teammate. You make the decisions.

#### 1. **Decide what you want to change**
   - Look at the start page
   - Pick something specific to modify
   - Examples:
     - "I want to change the color scheme to purple and orange"
     - "I want to add a section for my favorite websites"
     - "I want the buttons to glow when you hover over them"

#### 2. **Ask Gemini for help**
   - Open Gemini in your browser
   - **Attach the relevant file(s)** to your conversation
     - Changing colors? Attach `styles.css`
     - Changing content? Attach `index.html`
     - Adding features? Might need both
   - **Be specific** in your request
     - ❌ "Make it cooler"
     - ✅ "Change the primary color from green to blue, and make the background darker"

#### 3. **Review the AI's response**
   - Gemini will give you code in a code block
   - **Read it** - try to understand what changed
   - **Don't just blindly copy** - you're the human in charge

#### 4. **Apply the changes**
   - Copy the code from Gemini
   - Paste it into the appropriate file in Phoenix Code
   - **Important:** Replace the OLD code with the NEW code (usually)

#### 5. **Test immediately**
   - Save the file (`Cmd+S`)
   - Check Live Preview - did it work?
   - If yes: Great! Try another change
   - If no: Use Undo (`Cmd+Z`) to revert, then figure out what went wrong

#### 6. **Iterate**
   - Try another change
   - Build on what works
   - Don't be afraid to experiment!
   - If you break something badly, you can always undo or re-download the repo

### Working with AI: Key Principles

**✅ DO:**
- Be specific about what you want
- Test changes immediately
- Ask follow-up questions if something doesn't work
- Try things even if you're not sure they'll work
- Save your files frequently (`Cmd+S`)

**❌ DON'T:**
- Copy code without testing it
- Make multiple changes before testing
- Give up if something breaks (that's part of the process!)
- Expect perfection on the first try
- Forget to save your work

### You Are the Manager

Remember: The AI is powerful but not creative. **You** decide:
- What to build
- What looks good
- What to keep and what to throw away
- When something is "done enough"

The AI suggests. You decide.

---

## What Can You Modify?

Here are some categories of changes you might explore, from easiest to more challenging:

### 1. **Colors and Visual Style** (Easiest)

**What:** Change the color scheme, fonts, text sizes

**Why it's easy:** CSS variables at the top of `styles.css` control colors throughout the whole site

**Examples:**
- "Change the primary color from green to purple"
- "Use a different Google font for all headings"
- "Make the background lighter/darker"
- "Change the button colors"

**Files to modify:** `styles.css`

---

### 2. **Content Updates** (Easy)

**What:** Change links, text, add/remove buttons

**Examples:**
- "Add a button linking to my favorite website"
- "Remove the Faculty Resources section"
- "Change 'The Start Page' heading to something else"
- "Add a subtitle describing what this page is for"

**Files to modify:** `index.html`

---

### 3. **Visual Effects** (Medium)

**What:** Add hover effects, animations, shadows, transitions

**Examples:**
- "Make buttons bounce when I hover over them"
- "Add a fade-in animation when the page loads"
- "Make the icons spin when you hover"
- "Add a glow effect to the calendar section"

**Files to modify:** `styles.css`

---

### 4. **Layout Changes** (Medium)

**What:** Rearrange sections, change how things are organized

**Examples:**
- "Put the calendar on the left instead of right"
- "Stack all sections in a single column"
- "Make the resource buttons display in 4 columns instead of 3"
- "Make the page work better on phones"

**Files to modify:** `styles.css` (grid layout section)

---

### 5. **Adding New Sections** (Medium-Hard)

**What:** Create entirely new content areas

**Examples:**
- "Add a section for helpful study websites"
- "Create a section with embedded videos"
- "Add a weather widget"
- "Create a 'quick links' section for my classes"

**Files to modify:** `index.html` + `styles.css`

---

### 6. **Adding JavaScript Features** (Medium-Hard)

**What:** Add interactive features and functionality

**Important:**
- ⚠️ **Do NOT modify `calendar.js`** - leave it alone!
- ✅ **Create your own new JavaScript** for new features

**Examples:**
- "Add a button that changes the theme from dark to light"
- "Create a simple calculator that appears when you click a button"
- "Add a countdown timer to the next holiday"
- "Make a random quote appear each time the page loads"
- "Create a simple game (tic-tac-toe, guess the number, etc.)"

**How to add your own JavaScript:**

Option A: Create a new file
1. Create `my-feature.js` in the same folder
2. Write your JavaScript in that file
3. Add to `index.html` before the closing `</body>` tag:
   ```html
   <script src="my-feature.js"></script>
   ```

Option B: Inline script
- Add `<script>` tags directly in `index.html` before `</body>`
- Good for small features

**Files to modify:** New `.js` file + `index.html`, or just `index.html` for inline scripts

---

## Tips for Success

### Start Small

Don't try to rebuild the entire page in the first session. Make one change, test it, save it. Then make another.

### Embrace "Good Enough"

Like the AF teams, you have limited time. Something working and interesting beats something perfect and unfinished.

### When Things Break

They will! That's part of the process.

**If something doesn't work:**
1. **First try:** Use Undo (`Cmd+Z`) to revert your last change
2. Read any error messages in the browser console (F12 or right-click > Inspect)
3. Check what you changed - did you paste it in the right place?
4. Ask Gemini: "This code isn't working, here's the error: [paste error]"
5. **If completely stuck:** Close Phoenix Code, re-download your repo from GitHub, start fresh
   - Your GitHub copy is always there as a backup
   - You can try a different approach

**Remember:** Sometimes "broken" is interesting. Bugs and accidents can become the best features.

### Save Your Work

**Save early, save often!** Use `Cmd+S` to save files whenever something works.

**Your safety nets:**
- **Undo:** `Cmd+Z` reverses your last changes (works for multiple steps back)
- **Redo:** `Cmd+Shift+Z` if you undo too far
- **Re-download:** If you get completely stuck, close Phoenix Code and re-download your repo from GitHub

**Pro tip:** Before trying something risky, save your files. Then if it breaks, you can undo back to the saved state.

### You Have Three Classes

- **Class 1:** Get set up, make your first changes, get comfortable with the workflow
- **Class 2:** Try more ambitious changes, find your direction
- **Class 3:** Add something that makes it yours, finish up

You don't need to use all the time. If you're happy with what you made, you're done.

---

## What About the Calendar Code?

You'll notice `calendar.js` is complex JavaScript that fetches events from Google Calendar.

**You should NOT modify this file.** It's doing its job well - leave it alone!

**But...** if you want calendar-related changes:
- **Hide the calendar entirely:** Modify CSS or remove the calendar section from HTML
- **Change how it looks:** Modify the calendar styles in `styles.css`
- **Change initial load time:** You COULD modify `calendar.js`, but it's complex - ask your teacher first

Think of `calendar.js` like a black box that works. You can style the box, hide the box, or move the box, but don't open the box.

---

## This Is Unassessed - Here's Why

This activity is **not graded** because:

1. **The process is the point**, not the product
2. **You're experimenting** with tools you haven't formally learned yet
3. **"Failure" here is just learning** what doesn't work
4. **Everyone will have different results** and that's perfect

You're making a web page. For a little bit.

Even if you never touch HTML/CSS again (which you will!), you'll always have this experience of MAKING something for the web instead of just using it.

---

## Questions?

**During class:** Ask your teacher

**Working with AI:**
- If Gemini isn't understanding you, try being more specific
- Attach the right files to your conversation
- Explain what you're trying to achieve AND what's not working

**Phoenix Code problems:** Ask your teacher - sometimes things need troubleshooting

---

## Final Thoughts

The experience of making something becomes part of who you are, even after the project is done.

The start page you make doesn't have to be perfect.

The start page you make doesn't have to impress anyone.

The start page you make just has to be YOURS.

**Now get to work, project lead. You've got an Amnesia Fortnight to run.**

---

## Appendix: Quick Reference

### Useful Gemini Prompts

**Changing colors:**
```
I've attached styles.css. Change the primary color from green (#7ECFA0) to [color].
Make sure it still has good contrast with the dark background.
```

**Adding content:**
```
I've attached index.html. Add a new button in the Account Resources section that
links to [URL] with the text [button text]. Use the same style as the other buttons.
```

**Creating hover effects:**
```
I've attached styles.css. Make the resource buttons grow slightly and change color
when I hover over them. Keep it smooth with a transition.
```

**Adding a new section:**
```
I've attached index.html and styles.css. Create a new section called [name] with
[description of what it should contain]. Style it to match the existing sections.
```

**Fixing errors:**
```
I tried to [what you did] but got this error: [paste error message].
Here's the code I added: [paste code]
What did I do wrong?
```

### File Cheat Sheet

- **index.html** - Page structure and content
- **styles.css** - All visual styling (colors, layout, effects)
- **calendar.js** - Calendar functionality (don't touch!)
- **images/** - Icons and images used on the page

### CSS Variables You Can Change (in styles.css)

Colors (around lines 9-18):
- `--clr-text` - Main text color
- `--clr-body` - Page background
- `--clr-surface` - Section backgrounds
- `--clr-primary` - Main accent color (green by default)
- `--clr-secondary` - Secondary accent (orange)
- `--clr-accent` - Hover/focus color (pink)

### Keyboard Shortcuts in Phoenix Code

- `Cmd/Ctrl + S` - Save file
- `Cmd/Ctrl + F` - Find in file
- `Cmd/Ctrl + Z` - Undo
- `Cmd/Ctrl + Shift + Z` - Redo

### Browser Developer Tools

Press `F12` or right-click > "Inspect" to:
- See error messages (Console tab)
- Inspect HTML elements (Elements tab)
- See what CSS is being applied
- Test changes before saving them

---

*This README is part of the Watkinson Web Development course, Spring 2026.*
*Inspired by Double Fine's Amnesia Fortnight process.*
