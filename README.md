# Philopateer Waheed — Personal Portfolio Website

A bespoke, editorial, high-performance personal portfolio website for **Philopateer Waheed** (Software Engineer & Backend Specialist at Ahram Canadian University).

Designed with an **"Architectural Systems & Editorial Dossier"** visual identity, **full bilingual support (English & Arabic with proper RTL layout mirroring)**, an interactive backend architecture blueprint, varied project showcase layouts, and high-performance frontend architecture.

---

## 🌟 Key Features & Redesign Highlights

- **Visual Identity ("Architectural Systems & Editorial Dossier")**:
  - Bespoke editorial masthead aesthetic with obsidian slate canvas (`#090b0e`), precision hairline borders, warm signal amber accents (`#f59e0b`), and technical metadata typography.
  - Zero generic template patterns: no gradient blob backgrounds, no rounded dashboard cards, no centered "Hi I'm a Developer" clichés.
  - Cohesive Dark & Light theme modes with automatic OS sync and `localStorage` persistence.
- **Full Bilingual Support (English | العربية)**:
  - Seamless in-memory language switching between **English (LTR)** and **Natural Arabic (RTL)** without reloading the page.
  - Switches `lang="ar"` and `dir="rtl"` with comprehensive CSS Logical Properties (`margin-inline`, `padding-inline`, `inset-inline-start`, text alignments).
  - Directional icons and arrows automatically mirror in RTL mode.
  - High-quality Arabic typography powered by **IBM Plex Sans Arabic** paired with **Space Grotesk** and **Plus Jakarta Sans** for English.
  - Persists language preference across browser reloads via `localStorage` and supports direct sharing via `?lang=en` or `?lang=ar`.
  - Professional, natural Arabic translation preserving industry-standard technical terms (Laravel, PHP, C#, .NET, MySQL, REST API, GitHub).
- **Interactive System Architecture Blueprint (Hero Section)**:
  - An interactive architectural schema representing Philopateer's technical mental model:
    1. Client & Presentation Tier (Modern Web UI, Responsive ES6+)
    2. API & Gateway Middleware (RESTful Endpoints, Routing, RBAC, Validation)
    3. Application Domain Business Logic (ASP.NET Core & Laravel MVC, EF Core, LINQ)
    4. Relational Persistence Tier (MySQL Schemas, Relational Normalization, Indexing)
- **Layered Technical Competencies Matrix**:
  - Replaces generic skill pills with an architectural stack organized by systems layers:
    - *Core Languages & Runtimes* (C#, PHP, C++, JavaScript ES6+, Python, SQL)
    - *Frameworks & Backend Architecture* (ASP.NET Core, Laravel, EF Core, LINQ, RESTful APIs)
    - *Databases & Persistence* (MySQL, Normalization, Relational Index Optimization)
    - *Toolchain & Delivery* (Git, GitHub, Vercel, Composer, XAMPP, Google Apps Script)
    - *Engineering Disciplines* (MVC, RBAC Security, Database Optimization, Agile)
    - *Professional Capabilities* (Problem Solving, Critical Thinking, Continuous Growth)
- **Varied Project Showcase**:
  - **Hero Feature Showcase**: Full-width asymmetric breakdown for **St. Timothy Bible School — Management & E-Learning Platform**.
  - **Split System Cards**: Alternating asymmetric layouts for **Enterprise Resource Planning (ERP) System** and **FitZone Platform**.
  - **Compact Technical Ledger**: High-density engineering ledger for **PC-Builder (NTI Capstone)** and **GB-Corp Race Game (Custom 2D Physics)**.
  - **Dynamic Bilingual Modal Dialog**: Interactive "System Details" modal rendering deep architectural insights, feature lists, and repository links in the active language.
- **Accredited Education & Certifications**:
  - **Ahram Canadian University (ACU)**: 3rd Year Software Engineering, Cumulative GPA: **3.23 / 4.00**.
  - **Government & Industry Credentials**: DEPI (.NET Specialization • MCIT), NTI (PHP & Laravel Track • MCIT), ALX Africa, Black Horse Academy, and Sprints.AI.
- **Professional Contact & Transmission**:
  - Direct connection cards for Email, GitHub, LinkedIn, and WhatsApp.
  - Production transmission form with client-side regex validation, accessible labels, loading states, and full EmailJS integration.

---

## 📁 Project Architecture

```
portfolio/
├── index.html                  # Semantic, accessible HTML5 document with bilingual data-i18n attributes
├── css/
│   ├── style.css               # Architectural Systems design system, tokens, typography, RTL rules
│   └── responsive.css          # Responsive breakpoints (1440px, 1024px, 768px, 480px, 375px)
├── js/
│   ├── translations.js         # Comprehensive English and natural Arabic translation dictionary
│   ├── projects-data.js        # Bilingual projects data store for showcase cards and modals
│   └── script.js               # Core interactivity: language switcher, RTL engine, theme, modals, contact form
├── assets/
│   ├── images/                 # Project graphics and SVG visuals
│   ├── certificates/           # Accreditation badge previews
│   └── resume/
│       └── Philopateer-Waheed-CV.pdf  # Curriculum Vitae document
├── favicon/
│   └── favicon.svg             # Minimalist terminal SVG favicon
├── img/                        # Project preview screenshots & certification badges
└── README.md                   # Project documentation
```

---

## 🚀 How to Run Locally

This portfolio is **100% Client-Side** with zero server dependencies or build steps required.

### Method 1: Direct File
Double-click `index.html` or open it directly in modern browsers (Chrome, Edge, Firefox, Safari).

### Method 2: Local HTTP Server
Using VS Code Live Server extension or running:
```bash
# Python
python -m http.server 8000

# Node.js npx
npx serve .
```
Then visit `http://localhost:8000` (or `http://localhost:8000/?lang=ar` for Arabic).

---

## 📄 Credits & Copyright

Designed & Engineered for **Philopateer Waheed**  
© 2026 Philopateer Waheed. All rights reserved.
