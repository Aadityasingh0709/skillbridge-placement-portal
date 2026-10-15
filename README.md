# SkillBridge — Skill Mapping & Placement Portal

![CI](https://github.com/Aadityasingh0709/skillbridge-placement-portal/actions/workflows/ci.yml/badge.svg)

SkillBridge is a responsive student placement portal prototype that brings skill assessment, career-readiness insights, opportunity discovery, application tracking, and mentorship browsing into one interface.

> **Project status:** Front-end prototype. The screens use illustrative sample data; there is no authentication, backend, or persistent storage.

## Table of contents

- [Project overview](#project-overview)
- [Features](#features)
- [Application routes](#application-routes)
- [Technology stack](#technology-stack)
- [Getting started](#getting-started)
- [Available commands](#available-commands)
- [Project structure](#project-structure)
- [Data and prototype limitations](#data-and-prototype-limitations)
- [Continuous integration](#continuous-integration)
- [Future improvements](#future-improvements)
- [Author](#author)
- [License](#license)

## Project overview

Students often need to move between separate tools to understand their skill gaps, find relevant opportunities, and keep track of applications. SkillBridge explores how those tasks could be brought together in a single student-facing portal.

The interface is organized around a student dashboard and supporting pages. Sample student, opportunity, application, and mentor records make it possible to explore the experience without connecting to a live placement system.

### Intended user journey

1. Review readiness indicators and recommended listings on the dashboard.
2. Complete a guided self-assessment covering technical fundamentals, soft skills, career goals, and placement preferences.
3. Browse and filter internship, full-time, and co-op opportunities.
4. Review example application stages and explore mentor profiles.
5. View the sample skill profile and profile/document settings.

## Features

- **Dashboard:** Readiness summary, readiness-trend visualization, deadlines, and recommended opportunities.
- **Guided skill assessment:** Four sections of multiple-choice, rating, and written-response questions with step navigation and progress feedback.
- **Opportunity discovery:** Search sample listings by role, company, or skill; filter by role type, location, and duration; sort results by match score.
- **Application overview:** Sample applications grouped into applied, shortlisted, interview, offered, and rejected stages, with board and table views.
- **Skill profile:** Example readiness, skill strengths, and identified development areas.
- **Mentorship directory:** Example mentor profiles, focus areas, ratings, and availability labels.
- **Profile settings:** Personal and academic form layouts, plus resume and certificate file-picker interactions.
- **Responsive navigation and layout:** App-shell navigation and page layouts designed to adapt to different screen sizes.

## Application routes

| Route | Page |
| --- | --- |
| `/` | Student dashboard |
| `/profile` | Skill profile and readiness information |
| `/assessment` | Guided skill assessment |
| `/opportunities` | Search and filter opportunity listings |
| `/applications` | Application-stage summary and tracker |
| `/mentorships` | Mentor directory |
| `/settings` | Personal, academic, and document settings |

The opportunity page also accepts `?type=internship` and `?type=fulltime` to preselect a listing type.

## Technology stack

- **Framework:** Next.js App Router
- **UI:** React 19, TypeScript, Tailwind CSS 4
- **Components:** Base UI and reusable shadcn-style components
- **Charts:** Recharts
- **Animation:** Motion
- **Icons:** Lucide React
- **Notifications:** Sonner
- **Analytics integration:** Vercel Analytics, rendered in production builds

## Getting started

### Prerequisites

- Node.js 20.9 or later (Node.js 22 LTS recommended)
- npm
- Git

### Install and run locally

```bash
git clone https://github.com/Aadityasingh0709/skillbridge-placement-portal.git
cd skillbridge-placement-portal
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To create and run a production build locally:

```bash
npm run build
npm run start
```

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Start the production server; run `npm run build` first |
| `npx tsc --noEmit` | Check TypeScript types without emitting files |

There is currently no dedicated unit-test or end-to-end-test script.

## Project structure

```text
app/
  applications/       Application tracker route
  assessment/         Skill assessment route
  mentorships/        Mentor directory route
  opportunities/      Opportunity browser route
  profile/            Student skill profile route
  settings/           Profile settings route
  globals.css         Global styles and design tokens
  layout.tsx          Root layout, fonts, metadata, and providers
  page.tsx            Dashboard route
components/
  ui/                 Reusable interface primitives
  ...                 Feature components and shared page layouts
hooks/                Shared React hooks
lib/
  assessment.ts       Assessment questions and step definitions
  data.ts             Illustrative student, listing, mentor, and application data
  utils.ts             Shared UI utilities
public/               Static icons and image assets
```

## Data and prototype limitations

This project demonstrates the interface and client-side presentation only. Keep these limitations in mind when reviewing or running it:

- The student, opportunities, mentors, deadlines, readiness indicators, and applications are illustrative records defined in `lib/data.ts`; they are not live listings or real user records.
- Assessment answers are held in component state. Submitting the assessment displays a confirmation and navigates to the profile page; it does not calculate or save a new profile.
- Opportunity search, filters, sorting, and application views operate on the bundled sample data.
- Settings form feedback and document selection are front-end interactions only. Selected files are not uploaded or stored.
- Mentor availability buttons are presentation controls; no booking or waitlist service is connected.
- There is no authentication, API, database, or cross-session persistence. Refreshing or leaving the page may discard changes.

Do not enter real personal, academic, or application information into this prototype.

## Continuous integration

GitHub Actions runs on pushes to `main` and on pull requests targeting `main`. The workflow installs the locked npm dependencies, checks TypeScript, and creates a production build.

## Future improvements

Possible next steps for evolving the prototype include:

- Add a backend, database, and authenticated student accounts.
- Persist assessment responses and use them to calculate personalized readiness insights.
- Connect opportunities to a verified data source and implement application submission and status updates.
- Implement secure document uploads and real mentor booking.
- Add automated unit and end-to-end tests.

## Author

**Aaditya Singh** · [GitHub profile](https://github.com/Aadityasingh0709)

## License

No license has been added to this repository; reuse terms have not been defined.
