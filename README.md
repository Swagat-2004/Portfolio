# Swagat's Portfolio — MERN Stack

Poora ready-made project: React (Vite + Tailwind) frontend + Express/MongoDB backend, Contact form dono se connected.

## Folder Structure

```
portfolio-project/
├── backend/
│   ├── models/Contact.js
│   ├── routes/contact.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── Hero.jsx
    │   │   ├── About.jsx
    │   │   ├── Skills.jsx
    │   │   ├── Projects.jsx
    │   │   ├── Contact.jsx
    │   │   └── Footer.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── package.json
    └── .env.example
```

## Setup — Backend

```bash
cd backend
npm install
cp .env.example .env
```

`.env` file me apna MongoDB Atlas connection string daalo:

```
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
CLIENT_URL=http://localhost:5173
```

Run karo:

```bash
npm run dev
```

Backend `http://localhost:5000` par chalega. Contact form data `contacts` collection me save hoga.

## Setup — Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Frontend `http://localhost:5173` par chalega, aur `.env` me `VITE_API_URL=http://localhost:5000` set hai jo backend se baat karega.

## Kya kya hai isme

- **Navbar** — code editor tab bar jaisa (Hero.jsx, About.jsx, etc.), scroll pe active tab highlight hota hai, mobile pe hamburger menu.
- **Hero** — intro section, GitHub + Contact button ke saath.
- **About** — tumhari FYRP aur background.
- **Skills** — grouped by Frontend / Backend / Cloud / CS Fundamentals.
- **Projects** — FYRP, Weather App, Shopping Cart cards, GitHub links ke saath.
- **Contact** — real form jo backend `/api/contact` route pe POST karta hai, MongoDB me save hota hai, success/error dono states handle hoti hain.
- **Footer** — GitHub link + back to top.

## Deploy karne ke liye (jab ready ho)

- Backend: Render / Railway pe deploy karo, `MONGO_URI` aur `CLIENT_URL` (apna deployed frontend URL) env vars set karo.
- Frontend: Vercel / Netlify pe deploy karo, `VITE_API_URL` ko apne deployed backend URL par set karo.

## Note

Ye fresh build hai (design + code), tumhare purane Hero.jsx / Navbar.jsx se match nahi karega agar tumne unme custom changes kiye the. Agar apna existing code merge karna hai, toh bas apne components ke andar ka JSX yahan wale structure me daal do — Tailwind classes aur file structure same rakhna taaki design consistent rahe.
