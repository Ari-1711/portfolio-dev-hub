# Portfolio Dev Hub

Centralized developer portfolio and interactive showcase built with **React.js (Vite)**, **Tailwind CSS**, **Node.js / Express.js REST API**, and **Python (MobileNetV2)** AI model integration.

## 🎨 Visual Identity & Design System
- **Style Direction:** Opsi 1 — Precision Minimalist (Architectural & Structured)
- **Palette (from `DESIGN.md`):**
  - Primary Deep Navy: `#293681`
  - Royal Accent Blue: `#4274D9`
  - Soft Ice Cyan: `#95CCDD`
  - Mint Background Base: `#D0E7E6`
  - Deep Card Navy (Dark Mode): `#1E2761`

## 🚀 Key Sections & Navigation
1. **Header / Navbar:** Brand logo, 6 smooth auto-scroll links (*Beranda, Tentang Saya, Portfolio, Pendidikan & Pengalaman, Blog, Kontak*), Theme Mode Toggle, and "Contact Me" CTA.
2. **Hero Section:** Split 2-column layout with status badge, headline, 2-line bio, CTA buttons, Direct Connect Hub (5 social icons: GitHub, LinkedIn, WA, Mail, IG), and Profile Avatar Frame.
3. **Tentang Saya:** Focus summary + 4-column Tech Stack Matrix (React.js, Node.js, Express, Tailwind, Python, MobileNetV2, Git, Vercel).
4. **Portfolio Showcase:** Featured AI Project Card (*Smart Waste Management System*) with problem vs. solution breakdown, tech tags, Live Demo link, and GitHub repo access.
5. **Pendidikan & Pengalaman:** Interactive Vertical Timeline featuring Informatics Engineering at Mercu Buana University and Fullstack & AI Engineering programs.
6. **Blog & Engineering Notes:** 3-column grid of technical articles.
7. **Contact & Footer:** Interactive contact form connected to Express REST API backend `/api/contact` with explicit UI states (`loading`, `error`, `success`), plus Direct Connect Hub.

## 🛠️ How to Run Locally

### 1. Frontend Development Server
```bash
cd frontend
npm install
npm run dev
```

### 2. Backend REST API Server
```bash
cd backend
npm install
npm run dev
```

## 📄 Documentation Artifacts
- [PRODUCT.md](file:///d:/portfolio-dev-hub/PRODUCT.md) — Durable product goals & context
- [DESIGN.md](file:///d:/portfolio-dev-hub/DESIGN.md) — Visual design tokens, typography, and anti-pattern rules
- [.agents/rules/](file:///d:/portfolio-dev-hub/.agents/rules/) — Workspace AI agent rulesets (`caveman.md`, `ponytail.md`, `clean-code.md`, `aposd.md`, `tech-stack.md`)
