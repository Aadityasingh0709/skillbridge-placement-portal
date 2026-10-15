# SkillBridge: Skill Mapping & Placement Portal

SkillBridge is a student-facing placement portal concept for connecting a student's skills and career readiness with internships, entry-level roles, and mentorship opportunities. It brings assessment, opportunity discovery, application tracking, and a student profile together in one dashboard.

## Features

- **Dashboard:** View readiness metrics, a readiness trend, upcoming deadlines, and recommended opportunities.
- **Skill profile:** Review a sample skills profile and career-readiness information.
- **Skill assessment:** Work through a guided assessment covering skills and career goals.
- **Opportunity browser:** Explore sample internship and full-time listings with role details and skill-match indicators.
- **Application tracker:** Review sample applications in board and table views.
- **Mentorships:** Browse mentorship information and sample program details.
- **Settings:** Explore profile, resume, and certificate settings.
- **Responsive interface:** Navigate the portal on desktop and smaller screens.

## Tech stack

- [Next.js](https://nextjs.org/) App Router and React
- TypeScript
- Tailwind CSS 4
- Base UI and custom shadcn-style components
- Recharts for data visualizations
- Motion for interface animations
- Lucide icons

## Getting started

### Requirements

- Node.js 20.9 or later
- npm

### Install and run

```bash
git clone https://github.com/Aadityasingh0709/skillbridge-placement-portal.git
cd skillbridge-placement-portal
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |

## Project structure

```text
app/          App Router pages and global styles
components/   Portal features and reusable UI components
hooks/        Shared React hooks
lib/          Sample data, assessment content, and utilities
public/       Static icons and images
```

## Prototype scope

This repository is a front-end prototype. It uses illustrative, seeded data and does not include authentication, backend integrations, or persistent storage. Changes made in the interface are not saved between sessions, and the sample listings and student details are not live records.

## License

No license has been specified for this project.
