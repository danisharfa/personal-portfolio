# Personal Portfolio

Personal website built with Astro and Tailwind CSS. This project showcases profile information, education, experience, projects, and contact details in a single-page portfolio.

## Tech Stack

- Astro 5
- Tailwind CSS 4
- Vite

## Sections

The homepage is composed from reusable Astro components:

- Header
- Hero
- About
- Education
- Experience
- Projects
- Contact
- Footer

## Project Structure

```text
/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ (Node.js 20 LTS recommended)
- npm

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Local development server runs at:

- http://localhost:4321

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the site for production into `dist/`
- `npm run preview` - Preview the production build locally
- `npm run astro` - Run Astro CLI commands

## Deployment Notes

This project is configured for GitHub Pages:

- `site`: `https://danisharfa.github.io`
- `base`: `/personal-portfolio`

These values are defined in `astro.config.mjs`. If you deploy somewhere else, update them accordingly.

## Customize Content

- Edit page composition in `src/pages/index.astro`
- Update section UI/content in `src/components/`
- Update global styling in `src/styles/global.css`

## License

This project is for personal portfolio use.
