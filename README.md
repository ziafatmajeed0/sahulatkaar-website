# SahulatKaar Website

Marketing website for SahulatKaar, built with the Next.js App Router and Tailwind CSS.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- ESLint

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create local environment variables:

```bash
cp .env.example .env.local
```

3. Start the development server:

```bash
npm run dev
```

4. Open `http://localhost:3000`.

## Available Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run start
```

## Project Structure

```text
app/                 Routes, metadata, SEO files, and global styles
components/          Shared UI and analytics components
data/                Centralized site copy and contact/config data
lib/                 Metadata and structured-data helpers
public/              Static assets
```

## Configuration

Main public settings live in `.env.local`:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_PHONE`
- `NEXT_PUBLIC_EMAIL`
- `NEXT_PUBLIC_INSTAGRAM`
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_FB_PIXEL_ID`

Shared site copy and generated links are centralized in [data/site.ts](./data/site.ts).

## Quality Checks

Run these before shipping changes:

```bash
npm run lint
npm run typecheck
npm run build
```

