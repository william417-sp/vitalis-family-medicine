# Vitalis Family Medicine — Website Mockup

A professional, client-ready website mockup for a fictional general medicine / family practice office. Built for William Rosado's web agency to demonstrate design capabilities to prospective healthcare clients.

![Vitalis Family Medicine](https://img.shields.io/badge/Demo-Medical_Practice-green) ![Vite](https://img.shields.io/badge/Built_with-Vite-646CFF) ![React](https://img.shields.io/badge/React-18-61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC)

## Overview

This single-page marketing website showcases a fictional but realistic medical practice called **Vitalis Family Medicine**, designed with a trustworthy, calm, and professional aesthetic suitable for primary care / general medicine audiences.

### Key Features

- **Sticky Header** — Logo, navigation (Services, Providers, Hours, Contact), and "Book Appointment" CTA
- **Hero Section** — Compelling headline, trust indicators, dual CTAs (Book Appointment + Call Office)
- **Services Grid** — 6 services: Annual Physicals, Chronic Care, Sick Visits, Vaccines, Labs/Referrals, Telehealth
- **Why Choose Us** — Trust strip with insurance-friendly messaging, same-week openings, bilingual staff
- **Provider Profiles** — 3 fictional healthcare providers with bios, credentials, and specialties
- **Hours & Location** — Office hours card + location in San Juan, Puerto Rico
- **Contact Form** — Appointment request form with success state (front-end only)
- **Footer** — Demo disclaimer, quick links, contact info, agency credit

### Bilingual Touch

Includes a subtle "Se habla español" badge suitable for Puerto Rico and US Hispanic markets.

## Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

Build outputs to the `dist/` directory.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Vite](https://vite.dev) | Build tool & dev server |
| [React 18](https://react.dev) | UI library |
| [TypeScript](https://typescriptlang.org) | Type safety |
| [Tailwind CSS 4](https://tailwindcss.com) | Utility-first styling |
| [Lucide React](https://lucide.dev) | Icon library |

## Project Structure

```
├── public/
│   └── favicon.svg          # Site favicon
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Sticky navigation
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Services.tsx     # Services grid
│   │   ├── TrustStrip.tsx   # Why choose us section
│   │   ├── Providers.tsx    # Provider profiles
│   │   ├── HoursLocation.tsx# Hours & location
│   │   ├── ContactForm.tsx  # Appointment request form
│   │   ├── Footer.tsx       # Footer with disclaimer
│   │   └── index.ts         # Component exports
│   ├── App.tsx              # Main application
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles + Tailwind
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript config
└── package.json             # Dependencies
```

## Customization

This mockup is designed to be easily customizable for real clients:

1. **Branding** — Update logo, colors, and clinic name in `Header.tsx` and `Footer.tsx`
2. **Content** — Edit provider information in `Providers.tsx`, services in `Services.tsx`
3. **Location** — Update address/hours in `HoursLocation.tsx`
4. **Colors** — Customize the color palette in `src/index.css` theme variables

## Important Disclaimers

⚠️ **DEMO SITE** — This is a mockup created for agency portfolio and client preview purposes.

- Not a real medical practice
- No real patient information is collected
- Form submissions are simulated (front-end only)
- All provider information is fictional
- Phone numbers and addresses are placeholder data

## License

This project is created for demonstration purposes. Feel free to use as a template for client projects.

---

<p align="center">
  Designed with ❤️ by <strong>William Rosado's Web Agency</strong>
</p>
