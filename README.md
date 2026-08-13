# Arjun Pillai — Dynamic Developer Portfolio & System Architecture

[![Deploy to GitHub Pages](https://github.com/00AJ-bit/Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/00AJ-bit/Portfolio/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live-Demo-brightgreen.svg)](https://00aj-bit.github.io/Portfolio/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A high-performance, dynamic portfolio website built for **Arjun Pillai** (Software Developer & ECE Engineer). Engineered with modern web standards, an editorial neo-tech aesthetic, interactive developer CLI console, Command Palette (`Ctrl + K`), and an ATS-friendly printable Curriculum Vitae (CV) generator.

---

## 🚀 Key Features

- ⚡ **Zero-Build & Ultra-Fast**: Built with pure modern Vanilla HTML5, modern CSS3, and ES6+ modules. Loads in milliseconds with zero dependencies or heavy compilation.
- 🎛️ **Centralized Data Layer (`js/data.js`)**: All personal info, projects, skills, education, experience, and links are decoupled into a single configuration file. Update anything in seconds without touching markup.
- 💻 **Interactive Developer Terminal / CLI**: Visitors can interact with a live simulated console to run commands like `help`, `skills`, `projects`, `education`, `cv`, `sudo hire`, `theme <name>`, and `clear`.
- 🔍 **Global Command Palette (`Ctrl + K` / `Cmd + K`)**: Instant keyboard-driven navigation, project lookup, theme switching, and resume downloading.
- 📄 **Interactive Resume / CV Viewer & PDF Export**: Integrated ATS-formatted CV modal with clean, dedicated `@media print` styling for 1-click high-res PDF generation and printing.
- 🐙 **Live GitHub API Integration**: Dynamically loads real-time repository stats, star counts, and recent projects directly from GitHub (`00AJ-bit`).
- 🎨 **Multi-Theme Engine**: Four curated color palettes (Midnight Obsidian, Cyber Emerald, Amber Sunset, and Clean Studio Light) with persistent `localStorage` memory.
- 📱 **100% Fluid Responsive & Accessible**: Meticulously designed for smartphones, tablets, laptops, and ultra-wide displays with keyboard navigation and semantic HTML5.

---

## 🛠️ Tech Stack & Architecture

- **Frontend**: HTML5 Semantic Markup, Modern CSS3 (Grid, Flexbox, Custom Properties, Glassmorphism), Vanilla JavaScript (ES6+ Modules)
- **APIs & Protocols**: GitHub REST API v3, Web Audio API, Web Clipboard API
- **Deployment & CI/CD**: GitHub Actions (`.github/workflows/deploy.yml`), GitHub Pages, Vercel, Netlify

---

## 📂 Project Structure

```text
gods eye/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automated GitHub Pages CI/CD workflow
├── css/
│   └── style.css             # Design tokens, themes, typography, & print styles
├── js/
│   ├── data.js               # ⚡ Single Source of Truth: Profile, Skills, Projects, CV
│   ├── main.js               # Core app controller, typing effect, project filters, toasts
│   ├── terminal.js           # Interactive Developer CLI shell
│   ├── command-palette.js    # Ctrl+K / Cmd+K Search & Command Palette engine
│   ├── github-api.js         # Live GitHub profile & repository telemetry
│   └── resume.js             # ATS-friendly CV viewer & Print/PDF export
├── index.html                # Main semantic application entrypoint
└── README.md                 # Documentation & deployment instructions
```

---

## 🚢 Instant Deployment Guide

### Option 1: Deploy to GitHub Pages (Recommended)

1. Open your terminal in this project folder.
2. Initialize git and push to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial dynamic portfolio release for Arjun Pillai"
   git branch -M main
   git remote add origin https://github.com/00AJ-bit/Portfolio.git
   git push -u origin main
   ```
3. Go to your repository settings on GitHub:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The included `.github/workflows/deploy.yml` workflow will automatically build and publish your site at:
   `https://00aj-bit.github.io/Portfolio/`

---

### Option 2: Deploy to Vercel (1-Click)

1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**.
3. Import `00AJ-bit/Portfolio` and click **Deploy**. (Zero build configuration needed).

---

### Option 3: Deploy to Netlify

1. Drag and drop this project folder directly into [app.netlify.com/drop](https://app.netlify.com/drop) or connect via GitHub.

---

## ✏️ How to Customize Your Content

All data is stored in [`js/data.js`](js/data.js). Simply open this file to update:
- Your name, title, bio, and social media handles.
- Add or edit projects, taglines, and architectural case studies.
- Modify technical skills and proficiency percentages.
- Update education, internships, or contact email.

---

## 📄 License

Open-source under the [MIT License](LICENSE). Built for **Arjun Pillai**.
