# MD. Emon Ali — Developer Portfolio

A responsive, single-page developer portfolio built with Next.js App Router, React, and plain JavaScript. It introduces my MERN stack work, selected projects, skills, and contact links. The layout adapts to desktop, tablet, and mobile screens, starts in dark mode, and lets visitors switch themes with the navigation toggle. Their choice is saved in the browser.

## Getting started

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. To create and run a production build:

```bash
npm run build
npm start
```

## Project structure

```text
app/                 Next.js routes, layout, metadata, and global styles
components/          Navigation and portfolio page sections
data/portfolio.js    Profile, project, and skill content
public/              Static assets, including the downloadable resume PDF
```

The home page is composed in `app/page.js`. Most portfolio text and links are centralized in `data/portfolio.js`, so update that file to change the profile, bio, projects, skills, and social links. Update `app/globals.css` to change the colors, typography, spacing, responsive breakpoints, or animations.

## Features

- Responsive single-page layout with section navigation
- Profile, biography, project history, skill groups, and contact links
- Dark theme by default with a navigation toggle for light mode; saves the visitor's choice
- Reduced-motion support and scroll reveal effects
- Resume download and external project links

## Deployment

Deploy on [Vercel](https://vercel.com) by importing the project repository. The standard Next.js build and start commands are included above.
