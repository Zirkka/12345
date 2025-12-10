# FireGuard Design Guidelines

## Design Approach
**Reference-Based Design** inspired by ShadeMaster's professional service website aesthetic. Clean, modern layout with strong visual hierarchy, generous whitespace, and trust-building elements appropriate for a fire prevention service.

## Typography System
- **Primary Font**: 'Inter' or 'Poppins' from Google Fonts (600-700 weight for headings)
- **Secondary Font**: Same family (400-500 weight for body text)
- **Headline Scale**: 
  - Hero: text-5xl to text-7xl (bold)
  - Section Headers: text-3xl to text-4xl (semibold)
  - Subsections: text-xl to text-2xl (medium)
  - Body: text-base to text-lg (regular)

## Layout System
**Tailwind Spacing Units**: Primary units are 4, 8, 12, 16, 20, 24 (e.g., p-8, mb-12, gap-16)
- Container: max-w-7xl with mx-auto
- Section padding: py-16 to py-24 on desktop, py-12 on mobile
- Component spacing: gap-8 between cards, gap-4 within components

## Component Library

### Navigation
Fixed header with transparent-to-solid transition on scroll. Logo left, navigation center/right (About Us, How It Works, Features, Videos, Contact). Mobile: hamburger menu with slide-in panel. Height: h-20.

### Hero Section
Full-width hero with large background image (family/home protection theme). Centered content with:
- Main headline: "Stop The Fire Before It Starts"
- Subheadline: "Save Lives and Money"  
- Description text about fire detection
- Primary CTA button with blurred background (bg-white/20 backdrop-blur-lg)
- Height: min-h-screen or 85vh

### How It Works - 4 Step Process
Grid layout (grid-cols-1 md:grid-cols-2 lg:grid-cols-4) with numbered cards:
1. Professional Installation
2. Real-Time Monitoring 24/7
3. Expert Assistance
4. Peace of Mind

Each card: icon/gif placeholder at top, number badge, title, description. Cards have subtle hover lift effect.

### About Section
Two-column layout (lg:grid-cols-2):
- Left: Headline + description about electrical fire prevention, statistics
- Right: Image grid (2x2) showing control centers, electrical panels, monitoring systems

### Features Grid
Four feature cards (grid-cols-1 md:grid-cols-2 lg:grid-cols-4):
- Live Monitoring of All Circuits
- Stop The Fire Before It Starts
- Overload Detection  
- Protect Your Home from Hidden Hazards

Each card: large icon, title, description. Background: subtle gradient or solid with border.

### Video/Podcast Section
Three video embeds in grid (grid-cols-1 md:grid-cols-3):
- Fireguard Insurance Company (5:47)
- Fireguard Building Managers (4:51)
- Fireguard Home Owners (5:08)

Each with thumbnail, play overlay, title, duration. Use aspect-video ratio.

### Contact Section
Three-column layout (lg:grid-cols-3):
- **Address Column**: Two office locations with icons
- **Contact Column**: Phone + email with click-to-call/email
- **Hours Column**: Business hours Monday-Saturday

Below: Contact form (2-column on desktop) with fields: First Name, Last Name, Email, Phone, Subject, Message. Submit button prominent.

### Footer
Multi-column layout with:
- Logo and tagline
- Quick links (navigation)
- Contact info summary
- Social media (Instagram icon)
- Copyright notice

## Images

### Hero Image
**Description**: Professional photo of a happy family in a modern home interior, warm lighting, sense of safety and security. Alternative: Modern home exterior at dusk with warm interior lighting visible.
**Placement**: Full-width background for hero section, with gradient overlay (from black/40 to transparent)

### About Section Images
**Description**: 
1. Electrical control panel with monitoring equipment
2. Arc fault detection close-up
3. Circuit breaker panel
4. Professional technician working

**Placement**: 2x2 grid in About section right column, rounded corners (rounded-lg)

### How It Works Icons
**Description**: Use icon library (Heroicons) or simple illustrations for:
1. Wrench/tools (Installation)
2. Monitor/screen with heartbeat (24/7 Monitoring)
3. Van/technician (Expert Assistance)
4. Shield/checkmark (Peace of Mind)

**Placement**: Top of each step card, size: w-16 h-16

### Feature Section Icons
**Description**: Use Heroicons or custom icons:
1. Live monitoring: Activity/pulse icon
2. Fire prevention: Fire with slash icon
3. Overload detection: Electrical bolt icon
4. Home protection: Home with shield icon

**Placement**: Above each feature title, size: w-12 h-12

## Animations
Minimal, professional animations:
- Scroll-triggered fade-in for sections (opacity + translate)
- Hover lift on cards (transform translate-y-1 with shadow increase)
- Smooth scroll navigation
- Nav background transition on scroll

## Accessibility
- High contrast text on all backgrounds
- Focus states on all interactive elements (ring-2 ring-offset-2)
- Semantic HTML throughout
- Alt text for all images
- Keyboard navigation support