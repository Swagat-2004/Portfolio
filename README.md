# Swagat's Portfolio — Vercel-ready

**Live**: https://portfolio-red-tau-64.vercel.app

MERN-stack portfolio. Frontend (Vite + React + Tailwind) and backend
(contact-form API as Vercel serverless functions) both deploy from this
single project to Vercel.

## Structure
```
/api/contact.js      -> serverless function, handles GET & POST /api/contact
/api/lib/db.js        -> cached MongoDB connection (serverless-safe)
/api/lib/ContactModel.js
/api/lib/sendEmail.js -> Resend email notification on new submissions
/src                  -> React frontend
vercel.json           -> build config
```

## Status

- Deployed and live on Vercel, connected to a GitHub repo (auto-deploys on push to `main`)
- MongoDB Atlas connected — every contact form submission is saved
- Email notifications via Resend — set up once `RESEND_API_KEY` and `NOTIFY_EMAIL` are added in Vercel's Environment Variables and redeployed

## Deploy to Vercel (for reference / redeploying elsewhere)

1. Push this folder to a GitHub repo (or run `vercel` directly from here).
2. On vercel.com -> **Add New Project** -> import the repo (or run `vercel`
   in this folder via the CLI and follow the prompts).
3. In **Project Settings -> Environment Variables**, add:
   - `MONGO_URI` — your MongoDB Atlas connection string
   - `RESEND_API_KEY` — from resend.com (free tier), only if you want email alerts
   - `NOTIFY_EMAIL` — the email address you want messages sent to
4. In **MongoDB Atlas -> Network Access**, add `0.0.0.0/0` to the IP
   access list — Vercel serverless functions don't have a fixed IP.
5. Deploy. Vercel auto-detects Vite for the frontend and treats every file
   in `/api` as a serverless function automatically — no extra config needed.
6. Your contact form will POST to `/api/contact` on the same domain,
   no CORS setup required. Every submission is saved to MongoDB; if
   `RESEND_API_KEY` and `NOTIFY_EMAIL` are set, you'll also get an email.

## Getting a Resend API key

1. Sign up free at https://resend.com
2. Dashboard -> API Keys -> Create API Key
3. Copy the key — use this as `RESEND_API_KEY`
4. No domain verification needed to start — Resend's shared test sender
   (`onboarding@resend.dev`) works out of the box for this.

## Local development

```bash
npm install
cp .env.example .env   # fill in MONGO_URI
vercel dev             # runs frontend + /api functions together, like production
```

(`vercel dev` needs the Vercel CLI: `npm install -g vercel`, then `vercel login`.)

Plain `npm run dev` also works for frontend-only work, but `/api` routes
won't respond unless you use `vercel dev`.
