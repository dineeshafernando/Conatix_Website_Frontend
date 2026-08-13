# Conatix Website Frontend

This is the frontend for the Conatix website, built with Next.js and React. 

## Prerequisites

Before running the project locally, make sure you have the following installed:

- Git
- Node.js 20 or later
- npm

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd conatix-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Open the site locally

Open your browser and go to:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
```
Starts the local development server.

```bash
npm run build
```
Creates a production-ready build.

## Project Structure

```text
conatix-website/
├── public/                          # Static files served directly by the browser
│   ├── fonts/                      # Custom local fonts used across the site
│   └── images/                     # Static images, logos, privacy visuals, awards, etc.
│       ├── awards/                 # Award images and icons
│       ├── insider-fraud/          # Insider fraud-related visual assets
│       ├── logos/                 # Brand and company logos
│       └── privacy/               # Privacy page graphics and assets
│
├── src/                            # Main application source code
│   ├── app/                        # Next.js file-based routing for pages and layouts
│   │   ├── globals.css             # Global style rules and theme variables
│   │   ├── layout.tsx              # Root layout, global metadata, fonts, nav, footer
│   │   ├── page.tsx                # Homepage
│   │   ├── company/                # Company-related pages
│   │   │   ├── page.tsx            # Company landing page
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── awards/
│   │   │   │   └── page.tsx
│   │   │   ├── career/
│   │   │   │   └── page.tsx
│   │   │   ├── partners/
│   │   │   │   └── page.tsx
│   │   │   └── team/
│   │   │       └── page.tsx
│   │   ├── contact/                # Contact-related pages
│   │   │   ├── page.tsx
│   │   │   └── locations/
│   │   │       └── page.tsx
│   │   ├── cyberomics/
│   │   │   └── page.tsx
│   │   ├── demo/
│   │   │   └── page.tsx
│   │   ├── news/                   # News pages
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── privacy/
│   │   │   └── page.tsx
│   │   ├── shop/
│   │   │   └── page.tsx
│   │   ├── solutions/             # Solution-related pages
│   │   │   ├── page.tsx           # Solution landing page
│   │   │   ├── insider-fraud/
│   │   │   │   └── page.tsx
│   │   │   ├── malware/
│   │   │   │   └── page.tsx
│   │   │   ├── ransomware/
│   │   │   │   └── page.tsx
│   │   │   └── supplier-third-party/
│   │   │       └── page.tsx
│   │   └── threats/               # Threat-related pages
│   │   │   ├── page.tsx           # Threat landing page
│   │       ├── insider-fraud/
│   │       │   └── page.tsx
│   │       ├── malware/
│   │       │   └── page.tsx
│   │       ├── ransomware/
│   │       │   └── page.tsx
│   │       └── supplier/
│   │           └── page.tsx
│   │
│   ├── components/                 # Reusable UI components across pages
│   │   ├── layout/                 # Shared layout components
│   │   │   ├── AlternatingSection.tsx  # Reusable alternating section layout
│   │   │   ├── DesktopNavBar.tsx      # Desktop navigation bar
│   │   │   ├── DesktopNavDropdown.tsx # Dropdown nav for desktop menu
│   │   │   ├── Footer.tsx             # Footer component
│   │   │   ├── MobileNav.tsx          # Mobile navigation menu
│   │   │   └── MobileNavDropdown.tsx  # Dropdown nav for mobile menu
│   │   ├── BlogsFilterBar.tsx      # Filtering UI for blog/news listings
│   │   ├── ContactInfo.tsx         # Contact details component
│   │   ├── Map.tsx                 # Embedded map component
│   │   ├── Pagination.tsx          # Pagination controls for list pages
│   │   ├── StrapiBlocksRenderer.tsx # Renders CMS blocks/content from Strapi
│   │   └── Teams.tsx               # Team cards component
│   │
│   └── lib/                       # Shared logic, utility functions, and content data
│       ├── awards.ts              # Award data used on awards-related pages
│       ├── navigation.ts          # Navigation bar data, update here when pages are added
│       ├── privacy.md             # Privacy policy content
│       ├── solutions.ts           # Solution page data and mappings
│       ├── util.ts                # Utility functions like date formatting helpers
│       └── strapi/                # Code for fetching content from Strapi
│           ├── blog.ts            # Fetches news/blog data from Strapi
│           └── team.ts            # Fetches team data from Strapi
│
├── package.json                   # Project scripts and dependencies
├── next.config.ts                 # Next.js configuration
├── tsconfig.json                  # TypeScript configuration
├── eslint.config.mjs              # ESLint configuration
├── postcss.config.mjs             # PostCSS/Tailwind configuration
├── next-env.d.ts                  # Next.js TypeScript environment declarations
├── README.md                      # Project documentation
├── note.txt                       # Extra notes or temporary project notes
└── .gitignore                     # Git ignored files and folders
```

## Notes

- This project uses the Next.js file-based routing.
- Global styles are managed in `src/app/globals.css`.
- Shared layout and metadata are defined in `src/app/layout.tsx`.
- Static assets such as fonts and images are stored in `public/`.
- Page data are stored in `lib/`, but if the data is small, can be directly written in the page.tsx file of a page.

## Troubleshooting

If the app does not start:

1. Make sure dependencies are installed:
   ```bash
   npm install
   ```

2. Confirm that you are using Node.js 20 or newer.

3. Ensure port 3000 is not already occupied.

4. Restart the dev server:
   ```bash
   npm run dev
   ```

## Summary

This frontend follows a standard Next.js structure:

- `public/` for static assets
- `src/app/` for pages and layout
- `src/components/` for reusable UI blocks
- `src/lib/` for shared logic and data helpers
