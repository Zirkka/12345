# FireGuard - Fire Prevention System

## Overview

FireGuard is a marketing website for an intelligent electrical fire prevention monitoring system. The application showcases a service that monitors residential electrical panels 24/7 to detect early signs of electrical fires through real-time circuit monitoring, arc-fault detection, and load analysis. The website features a modern, professional design with hero sections, service explanations, feature highlights, video content, and contact forms to educate potential customers and generate leads.

## Recent Changes

**November 13, 2025**: Enhanced branding and visual design
- Replaced static Lucide icons with animated GIF icons on Benefits page (Cost Savings, Real-Time Monitoring, Instant Alerts, Maximum Protection, Easy Installation, Detailed Analytics)
- Applied consistent red border (#cc3333) with subtle glow effect to all card components throughout website
- Enhanced logo visibility: scaled logo 1.8x using CSS transform without increasing navbar height, removed hover highlight effect, disabled text selection
- Updated benefit card icons: white circle backgrounds with black borders, centered alignment, larger size

**November 13, 2025**: Restructured navigation menu and page architecture
- Replaced old navigation menu (About Us, How It Works, Features, Videos, Contact) with new menu structure (Home, Our Team, Benefits, Pricing, Privacy Policy, Terms & Conditions)
- Created five new dedicated pages based on content from fireguard.org website
- Consolidated all original sections into the Home page as a full scrollable landing experience
- Navigation maintains dynamic logo switching: white logo on transparent navbar for home page top, black logo with dark navbar on scroll or on all other pages
- Removed unused page files (about.tsx, contact.tsx, features.tsx, how-it-works.tsx, videos.tsx)

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript running on Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight React router. The application uses a simple Switch/Route pattern with these primary pages:
- Home (`/`) - Full landing page with all sections: Hero, How It Works, About, Features, Promotional, Videos, and Contact sections
- Our Team (`/our-team`) - Team information, device installation, branch photos, and monitoring center details
- Benefits (`/benefits`) - Six key benefits presented in card format: Cost Savings, Real-Time Monitoring, Instant Alerts, Maximum Protection, Easy Installation, and Detailed Analytics
- Pricing (`/pricing`) - Three subscription tiers (Essential, Advanced, Total) with pricing details and corporate solutions information
- Privacy Policy (`/privacy-policy`) - Complete privacy policy detailing data collection, usage, security, and user rights
- Terms & Conditions (`/terms`) - Service terms, customer responsibilities, payment terms, and legal information

**UI Component System**: Built on shadcn/ui (New York style variant) with Radix UI primitives. Uses a comprehensive design system with:
- Tailwind CSS for styling with custom theme variables
- CSS variables for theming (light/dark mode support via HSL color system)
- Custom spacing, typography, and elevation utilities
- Hover and active state animations (`hover-elevate`, `active-elevate-2`)

**State Management**: TanStack Query (React Query) v5 for server state management, though currently minimal API interaction exists. Local state managed with React hooks.

**Design Philosophy**: Reference-based design inspired by professional service websites with:
- Clean, modern layout with strong visual hierarchy
- Generous whitespace using Tailwind spacing units (4, 8, 12, 16, 20, 24)
- Typography system using Inter/Poppins fonts from Google Fonts
- Container max-width of 7xl with centered layout
- Responsive grid layouts (1/2/4 column patterns)

### Backend Architecture

**Server Framework**: Express.js with TypeScript running in ESM mode.

**API Structure**: Currently minimal - the routes module (`server/routes.ts`) is set up but contains no implemented endpoints. The architecture supports adding REST API endpoints prefixed with `/api`.

**Development Server**: Custom Vite integration that:
- Runs Vite dev server in middleware mode for HMR
- Serves the React application
- Includes request logging with duration tracking
- Separates API routes from static content

**Storage Layer**: Abstracted through an `IStorage` interface with an in-memory implementation (`MemStorage`). Currently implements basic user CRUD operations (getUser, getUserByUsername, createUser) but is not actively used. The interface is designed to be swapped for a database-backed implementation.

**Production Build**: Two-step build process:
1. Vite builds the React frontend to `dist/public`
2. esbuild bundles the Express server to `dist/index.js`

### Data Storage

**Database ORM**: Drizzle ORM configured for PostgreSQL with:
- Schema definition in `shared/schema.ts`
- Neon Database serverless driver (`@neondatabase/serverless`)
- Migration folder: `./migrations`
- Schema includes a users table with id (UUID), username, and password fields

**Schema Validation**: Drizzle-Zod integration for runtime validation of insert operations.

**Current State**: Database schema is defined but not actively connected. The application currently uses in-memory storage. The Drizzle configuration expects a `DATABASE_URL` environment variable for PostgreSQL connection.

### External Dependencies

**UI Component Libraries**:
- Radix UI - Complete set of headless UI primitives (accordion, alert-dialog, avatar, checkbox, context-menu, dialog, dropdown-menu, hover-card, label, menubar, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, slider, switch, tabs, toast, toggle, tooltip)
- shadcn/ui - Pre-styled components built on Radix UI
- Lucide React - Icon library
- React Icons - Additional icons (Instagram icon used)

**Form Management**:
- React Hook Form - Form state and validation
- @hookform/resolvers - Validation resolver integration

**Styling & Animation**:
- Tailwind CSS - Utility-first CSS framework
- class-variance-authority - Component variant management
- clsx & tailwind-merge - Conditional className utilities
- Embla Carousel - Carousel/slider component

**Development Tools**:
- Replit-specific plugins (vite-plugin-runtime-error-modal, cartographer, dev-banner)
- TypeScript for type safety
- PostCSS with Autoprefixer

**Asset Management**: Images stored in `attached_assets/` directory with Vite alias configured (`@assets`) for imports. Includes generated AI images for technicians, panels, promotional materials, and logos.

**Third-Party Services**: None currently integrated, though the contact form is designed to collect leads (currently logs to console and shows toast notification).

**Session Management**: `connect-pg-simple` package included for PostgreSQL-backed sessions (not currently implemented).