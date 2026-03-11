# HCM2024 — Development Guide

## Project Overview
Clinician-facing Next.js app encoding the **2024 AHA/ACC/AMSSM/HRS/PACES/SCMR Guideline for the Management of Hypertrophic Cardiomyopathy** (Ommen SR et al., Circulation 2024;149:e1239–e1311).

## Tech Stack
- Next.js 14+ (App Router), TypeScript, Tailwind CSS
- Zustand + persist (localStorage) for state management
- react-markdown for AI chat rendering
- No database, no auth — client-side only, mobile-first

## Architecture
Follows the exact architecture of the PHT2022 app at `/Users/home/projects/PHT2022`.

### Pages
| Route | Content |
|-------|---------|
| `/` | Home — HCM definition, Top 10 messages, section cards |
| `/diagnosis` | 7 tabs: clinical, echo, cmr, other, exercise, genetics, genotype |
| `/scd-risk` | 4 tabs: adult, pediatric, icd, device |
| `/management` | 6 tabs: obstructive-pharm, obstructive-invasive, nonobstructive, advanced-hf, af, arrhythmia |
| `/lifestyle` | 4 tabs: exercise, occupation, pregnancy, comorbidities |
| `/ask` | AI chat with NotebookLM proxy |

### Key Files
- `src/store/appStore.ts` — Zustand store with 4 tab states + resetAll
- `src/store/chatStore.ts` — Chat messages, mode, conversation tracking
- `src/components/Navigation.tsx` — Sidebar (desktop) / hamburger drawer (mobile)
- `src/app/api/notebooklm/route.ts` — Proxy to NotebookLM (notebook ID: c9ba5f15-cedf-479f-946a-80c31ba9f26f)

## Commands
```bash
npm run dev    # Start development server
npm run build  # Production build
npm run start  # Start production server
```

## Environment Variables
```
NLM_PROXY_URL=<proxy endpoint>
NLM_PROXY_KEY=<api key>
NLM_NOTEBOOK_ID=c9ba5f15-cedf-479f-946a-80c31ba9f26f
```

## Design System
- Primary: #003366, Danger: #B22222, Success: #1E824C, Warning: #D4A017
- COR badges: `badge-green` (Class 1), `badge-yellow` (Class 2a/2b), `badge-red` (Class 3)
- LOE as `badge-blue` secondary badge
- CSS utilities: `.card`, `.card-header`, `.btn-primary`, `.tab-btn`, `.input-field`

## Deployment
- GitHub: https://github.com/amornj/hcm2024.git
- Vercel: auto-deploy from main branch
