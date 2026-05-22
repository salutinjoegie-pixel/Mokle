# Section Mauchly Website — Setup Guide

## 📁 File Structure

```
mauchly/
├── index.html       ← Home page
├── about.html       ← About section + student roster
├── awardees.html    ← Dean's list & awards
├── bloopers.html    ← Bloopers gallery
├── style.css        ← Shared styles + 3 color themes
├── theme.js         ← Theme switcher logic
├── README.md        ← This guide
└── images/          ← PUT ALL YOUR IMAGES HERE
    ├── logo.png
    ├── class-photo.jpg
    ├── adviser.jpg
    ├── student-juan.jpg
    ├── student-maria.jpg
    └── blooper1.jpg
```

---

## 🎨 Color Themes

The website has 3 themes — toggle via the 3 dots in the top-right nav:
- ⚫ **Dark** — Dark blue/black techy theme
- 🟣 **Purple** — Deep purple neon theme
- ⚪ **White** — Clean light/white theme

The selected theme is saved automatically across pages.

---

## 🖼️ How to Add Your Images

### 1. Create an `images/` folder inside `mauchly/`
   All images go here.

### 2. Logo (nav + hero)
   In `index.html` and every page, find the comment:
   ```html
   <!-- LOGO: <img src="images/logo.png" alt="Logo"/> -->
   ```
   Replace the `<span>M</span>` with:
   ```html
   <img src="images/logo.png" alt="Mauchly Logo"/>
   ```

### 3. Section Class Photo (Home page)
   In `index.html`, find the `.section-photo-frame` div and add:
   ```html
   <img src="images/class-photo.jpg" alt="Section Mauchly Class Photo"/>
   ```
   **Recommended size:** 1200×450px or wider.

### 4. Adviser Photo (About page)
   In `about.html`, inside `.adviser-photo`, replace the placeholder with:
   ```html
   <img src="images/adviser.jpg" alt="Adviser Name"/>
   ```

---

## 👥 How to Add Students (about.html)

Open `about.html` and find the `STUDENTS` array in the `<script>` tag.
Fill in each student's info:

```javascript
{ name:"Juan Dela Cruz",  id:"2024-0001", role:"Section President", photo:"images/juan.jpg" },
{ name:"Maria Santos",    id:"2024-0002", role:"Member",             photo:"images/maria.jpg" },
```

- **name** — Full name
- **id** — Student ID number
- **role** — One of: `Section President`, `VP Internal`, `VP External`,
  `Secretary`, `Asst. Secretary`, `Treasurer`, `Asst. Treasurer`,
  `Auditor`, `PRO`, `Muse`, `Escort`, `Member`
- **photo** — Path to photo in images folder. Leave `""` to show initials.

**Photo tips:**
- Use square images (1:1 ratio) for best results. Example: 300×300px.
- Name files clearly: `juan-delacruz.jpg`, `maria-santos.jpg`

---

## 🏆 How to Add Awardees (awardees.html)

Open `awardees.html` and find the 4 data arrays:

### Dean's List
```javascript
{ name:"Maria Santos", gpa:"1.25", sem:"1st Semester 2024–2025", photo:"images/maria.jpg" },
```

### Academic / Leadership / Special Awards
```javascript
{ name:"Juan Dela Cruz", award:"Best in Programming", detail:"Short description here", photo:"" },
```

---

## 😂 How to Add Bloopers (bloopers.html)

Open `bloopers.html` and edit the `BLOOPERS` array:

```javascript
{
  title:   "Blue Screen of Doom",
  desc:    "Presentation day. 3 laptops crashed simultaneously.",
  tag:     "#TrulyIT",
  date:    "Sep 2024",
  photo:   "images/blooper1.jpg",   // leave "" if no photo
  emoji:   "🖥️",                    // shown when no photo
  caption: "The infamous day..."    // hover text when photo is shown
},
```

---

## 🚀 How to Open the Website

1. Just double-click `index.html` to open it in your browser.
2. Or use **VS Code Live Server** for the best experience.
3. To host it online, upload the entire `mauchly/` folder to:
   - **GitHub Pages** (free)
   - **Netlify** (free, drag & drop)
   - **Vercel** (free)

---

## 💡 Tips

- Keep all images inside the `images/` folder.
- Use `.jpg` or `.webp` for photos (smaller file size than `.png`).
- The theme you pick is remembered between pages automatically.
- You can freely add/remove students, awardees, and bloopers.
