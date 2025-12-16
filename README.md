# Hitom - AI-Powered Solutions Portfolio

A modern, multilingual portfolio website showcasing AI expertise through proof-of-concept applications. Built with Next.js 14, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

- 🌍 **Multi-language support** (French, English, Spanish, Chinese)
- 🎨 **Dark mode** with system preference detection
- 🤖 **AI POC Showcase** - Interactive portfolio of AI projects
- 📱 **Fully responsive** with container queries
- 🔒 **Security-first** with comprehensive CSP headers
- 🚀 **Performance optimized** with Next.js App Router
- 📊 **Analytics integration** (Google Analytics 4, Microsoft Clarity)
- ♿ **Accessible** (WCAG AA compliant)
- 🎭 **Smooth animations** with Framer Motion
- 🍪 **GDPR compliant** with Axeptio consent management

## 🛠️ Tech Stack

- **Framework:** [Next.js 14.2.5](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + Container Queries
- **Internationalization:** [next-intl](https://next-intl-docs.vercel.app/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Form Validation:** [Zod](https://zod.dev/)
- **Analytics:** Vercel Analytics, Google Analytics 4, Microsoft Clarity
- **Smooth Scroll:** [Lenis](https://lenis.studiofreight.com/)
- **Deployment:** [Vercel](https://vercel.com)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/totiiix/hitom.git
cd hitom
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Create a `.env.local` file:
```env
# Required
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional - Analytics
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_ID=xxxxxxxxxx

# Optional - Third-party services
NEXT_PUBLIC_CRISP_WEBSITE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
NEXT_PUBLIC_AXEPTIO_CLIENT_ID=xxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link
```

4. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```
hitom/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── [locale]/        # Localized pages
│   │   │   ├── page.tsx     # Homepage
│   │   │   ├── poc-ia/      # POC showcase
│   │   │   ├── legal/       # Legal pages
│   │   │   ├── privacy/     # Privacy policy
│   │   │   └── cookies/     # Cookie policy
│   │   ├── globals.css      # Global styles
│   │   └── layout.tsx       # Root layout
│   ├── components/          # React components
│   │   ├── ui/              # Reusable UI components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Footer.tsx       # Site footer
│   │   └── Hero.tsx         # Hero section
│   ├── lib/                 # Utility functions
│   │   ├── analytics.ts     # Analytics helpers
│   │   ├── json-ld.ts       # SEO structured data
│   │   └── validations.ts   # Zod schemas
│   ├── data/                # Static data
│   │   └── poc-ia.ts        # POC definitions
│   ├── middleware.ts        # Security headers & i18n
│   └── i18n.ts              # Internationalization config
├── messages/                # Translation files
│   ├── fr.json              # French
│   ├── en.json              # English
│   ├── es.json              # Spanish
│   └── zh.json              # Chinese
├── public/                  # Static assets
│   └── brand/               # Logo & favicons
└── tailwind.config.ts       # Tailwind configuration
```

## 🌐 Internationalization

The site supports 4 languages with automatic routing:

- 🇫🇷 French (`/fr`) - Default
- 🇬🇧 English (`/en`)
- 🇪🇸 Spanish (`/es`)
- 🇨🇳 Chinese (`/zh`)

Add translations in `messages/{locale}.json`.

## 🎨 Design System

- **Colors:** Custom brand palette with dark mode support
- **Typography:** System font stack for optimal performance
- **Spacing:** Tailwind's default scale
- **Breakpoints:** Container queries (@lg, @2xl, @3xl, @5xl)
- **Animations:** Reduced motion support for accessibility

## 🔒 Security

- Content Security Policy (CSP)
- HTTP Strict Transport Security (HSTS)
- X-Frame-Options
- X-Content-Type-Options
- Referrer Policy
- Permissions Policy

## 📈 SEO

- JSON-LD structured data (Organization, Website, Article, Breadcrumb)
- Open Graph tags
- Twitter Card meta tags
- Sitemap generation
- Canonical URLs
- Multi-language hreflang tags

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Thomas (Hitom)**
- Website: [hitom.fr](https://hitom.fr)
- GitHub: [@totiiix](https://github.com/totiiix)
- Email: hello@hitom.fr

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons by [Lucide](https://lucide.dev/)

---

🤖 *Generated with [Claude Code](https://claude.com/claude-code)*
