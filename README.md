# JSX Intro for Designers

A **white-label** login screen converted from plain HTML/CSS into a React + JSX project. Use it to see how the markup you already know maps into JSX.

## Run the project

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

---

## HTML vs JSX: What Actually Changes?

You already know HTML. JSX is the same structure with a few naming rules so it fits inside JavaScript. Here’s the mapping.

### 1. `class` → `className`

In HTML you write `class="top-nav"`. In JSX you write `className="top-nav"`.

**Why:** In JavaScript, `class` is a reserved word (used for defining classes). So in JSX we use `className` instead. Your CSS stays the same; only the attribute name in the markup changes.

| HTML | JSX |
|------|-----|
| `<nav class="top-nav">` | `<nav className="top-nav">` |

---

### 2. `for` → `htmlFor`

In HTML, labels use `for="email"` to link to an input with `id="email"`. In JSX you write `htmlFor="email"`.

**Why:** In JavaScript, `for` is reserved (used in loops). So we use `htmlFor` in JSX.

| HTML | JSX |
|------|-----|
| `<label for="email">` | `<label htmlFor="email">` |

---

### 3. Hyphenated attributes → camelCase

In HTML and SVG you see things like `stroke-width`, `stroke-linecap`, `aria-label`. In JSX, multi-word attributes use **camelCase**: `strokeWidth`, `strokeLinecap`. `aria-label` stays as `aria-label` (no capital in the middle).

| HTML / SVG | JSX |
|------------|-----|
| `stroke-width="2"` | `strokeWidth="2"` |
| `stroke-linecap="round"` | `strokeLinecap="round"` |
| `viewBox="0 0 24 24"` | `viewBox="0 0 24 24"` (unchanged) |

---

### 4. Comments: `<!-- -->` → `{/* */}`

In HTML you comment with `<!-- comment -->`. In JSX you’re inside JavaScript, so comments use curly braces and `/* */`:

| HTML | JSX |
|------|-----|
| `<!-- Top Navigation -->` | `{/* Top Navigation */}` |

---

### 5. Self-closing tags

In HTML, tags like `<img>` and `<input>` are often written without a slash. In JSX they must **self-close** with `/>`:

| HTML | JSX |
|------|-----|
| `<img src="logo.png" alt="Logo">` | `<img src="logo.png" alt="Logo" />` |
| `<input type="email" id="email">` | `<input type="email" id="email" />` |

---

### 6. What stays the same

- **Structure:** `<div>`, `<nav>`, `<main>`, `<form>`, `<button>`, etc. work the same.
- **Semantics:** `<main>`, `<nav>`, headings, labels—all unchanged.
- **Accessibility:** `aria-label`, `alt`, `id`/`htmlFor`—same idea, just `for` → `htmlFor`.
- **Your CSS:** Same class names (e.g. `.top-nav`, `.login-form`); you just assign them with `className` in JSX.

---

## Project structure

```
├── index.html          # Entry HTML (minimal; just a root div)
├── src/
│   ├── main.jsx        # Renders the React app into the root div
│   ├── App.jsx         # The login UI (HTML → JSX with comments)
│   └── index.css       # Same styles as your original CSS
├── public/
│   └── assets/
│       └── images/
│           └── logo.svg   # Placeholder logo (replace with your own)
└── README.md           # This file
```

**White-label:** Replace `public/assets/images/logo.svg` with your own logo (e.g. `logo.png`) and update the `src` in `App.jsx` if you use a different filename.

---

## Quick reference card

| In HTML you write… | In JSX you write… |
|--------------------|-------------------|
| `class="..."` | `className="..."` |
| `for="..."` | `htmlFor="..."` |
| `stroke-width` | `strokeWidth` |
| `stroke-linecap` | `strokeLinecap` |
| `<!-- comment -->` | `{/* comment */}` |
| `<img src="...">` | `<img src="..." />` |
| `<input ...>` | `<input ... />` |

Once you apply these rules, the rest of your HTML knowledge carries straight over into JSX.
