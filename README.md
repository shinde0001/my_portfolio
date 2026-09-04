# Parth Shinde — Portfolio

A premium, modern portfolio website built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **Shadcn/UI**.

## ✨ Features

- **Premium Design** — Glassmorphism cards, gradient accents, animated particles, dot-pattern backgrounds
- **Dark/Light Mode** — Smooth transitions with localStorage persistence and system preference detection
- **Fully Responsive** — Mobile → Tablet → Desktop layouts
- **Smooth Animations** — Scroll-triggered reveals via Framer Motion, micro-interactions on hover
- **SEO Optimized** — Complete meta tags, Open Graph, structured headings, semantic HTML
- **Accessible** — ARIA labels, focus states, keyboard navigation, proper heading hierarchy
- **Contact Form** — Client-side validation with mailto fallback
- **Downloadable Resume** — Button in navbar and hero section

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Design system (theme tokens, animations, utilities)
│   ├── layout.tsx           # Root layout with SEO metadata, fonts, providers
│   └── page.tsx             # Main page composing all sections
├── components/
│   ├── icons.tsx            # Custom SVG brand icons (GitHub, LinkedIn)
│   ├── motion.tsx           # Reusable Framer Motion animation wrappers
│   ├── section-heading.tsx  # Consistent section heading component
│   ├── theme-provider.tsx   # Dark/light mode context provider
│   ├── sections/
│   │   ├── navbar.tsx       # Fixed navbar with glassmorphism + mobile menu
│   │   ├── hero.tsx         # Animated hero with gradient orbs & particles
│   │   ├── about.tsx        # Bio + quick facts + stats
│   │   ├── skills.tsx       # Categorized skill cards
│   │   ├── experience.tsx   # Timeline layout with bullet points
│   │   ├── projects.tsx     # Project cards with GitHub/Demo links
│   │   ├── education.tsx    # Education cards with grade badges
│   │   ├── contact.tsx      # Contact form + info + social links
│   │   ├── footer.tsx       # Footer with quick links
│   │   └── index.ts         # Barrel exports
│   └── ui/                  # Shadcn/UI components
│       ├── button.tsx
│       ├── badge.tsx
│       ├── card.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       └── tooltip.tsx
└── lib/
    ├── constants.ts         # All portfolio data (skills, experience, projects)
    └── utils.ts             # cn() utility for class merging
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (20 recommended)
- npm

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js and deploys

### Other Platforms

```bash
npm run build    # Generates .next/ production output
npm start        # Starts production server on port 3000
```

## 📝 Customization

All personal data lives in **`src/lib/constants.ts`** — update your name, skills, experience, projects, and links there.

For theming, edit the CSS custom properties in **`src/app/globals.css`** under `:root` and `.dark` selectors.

To add your resume, place the PDF file as `public/Parth_Shinde_Resume.pdf`.

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | React framework with App Router |
| TypeScript | Type safety |
| Tailwind CSS v4 | Utility-first styling |
| Framer Motion | Animations and transitions |
| Shadcn/UI | Accessible UI components |
| Lucide Icons | Icon library |

## 📄 License

MIT

---

Built with by Parth Shinde
