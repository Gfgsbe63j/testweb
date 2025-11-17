# Web Developer Portfolio

A professional portfolio website built with Next.js, React, and Tailwind CSS for a web developer specializing in services for local businesses.

## Features

- 🎨 Modern, responsive design
- ⚡ Built with Next.js 15 for optimal performance
- 💅 Styled with Tailwind CSS
- 📱 Mobile-first approach
- 🔍 SEO-optimized
- 📧 Contact form
- 💼 Services showcase
- 🖼️ Portfolio gallery
- ℹ️ About section with skills

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   └── components/
│       ├── Navbar.tsx      # Navigation bar
│       ├── Hero.tsx        # Hero section
│       ├── Services.tsx    # Services section
│       ├── Portfolio.tsx   # Portfolio showcase
│       ├── About.tsx       # About section
│       ├── Contact.tsx     # Contact form
│       └── Footer.tsx      # Footer
├── public/                 # Static assets
└── package.json
```

## Customization

### Update Content

1. **Personal Information**: Edit contact details in `Footer.tsx` and `Contact.tsx`
2. **Services**: Modify the services array in `Services.tsx`
3. **Portfolio Projects**: Update the projects array in `Portfolio.tsx`
4. **About Section**: Customize story and skills in `About.tsx`
5. **Hero Stats**: Update statistics in `Hero.tsx`

### Styling

- Colors and theme can be customized in `tailwind.config.ts`
- Global styles are in `src/app/globals.css`

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This portfolio can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any static hosting service

## Technologies Used

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)

## License

This project is open source and available for personal and commercial use.
