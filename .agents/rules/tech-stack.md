# Tech Stack & Senior Profesional Engineering Rules

## 1. Project Context & Primary Stack
- **Repository:** https://github.com/Ari-1711/portfolio-dev-hub
- **Frontend:** React.js (via Vite) + Tailwind CSS + React Router.
- **Backend & API:** Node.js + Express.js (REST API architecture).
- **Version Control & CI/CD:** Git, GitHub (Public Repository).
- **Deployment Platform:** Vercel (Frontend & Serverless Node.js Backend).

## 2. Senior Frontend Standards (React.js)
- Build modular, single-responsibility functional components.
- Use native React Context or basic hooks (`useState`, `useEffect`) for state management. Avoid heavy state libraries unless necessary.
- Handle API states explicitly: `loading`, `error`, and `success` UI views.
- Mobile-first responsive design using Tailwind CSS.

## 3. Senior Backend Standards (Node.js/Express)
- Design clean RESTful endpoints using standard HTTP methods (`GET`, `POST`, `PUT`, `DELETE`).
- Return consistent JSON response structures:
  `{ "success": boolean, "data": object|array, "message": string }`
- Implement basic input validation and centralized error-handling middleware.
- Store environment variables (like API keys/ports) in `.env` files; never hardcode secrets.

## 4. Integration & Deployment (Vercel + GitHub)
- Maintain a clean Git commit history with semantic messages (e.g., `feat:`, `fix:`, `docs:`).
- Ensure relative paths and environment configurations are set up for seamless Vercel deployment.
- Keep source code modular so Antigravity CLI / AI Agents can parse changes incrementally without large re-writes.
