# TripyPackage - Responsive Next.js Project

A modern, responsive Next.js application built with TypeScript and Tailwind CSS, featuring a comprehensive responsive design system.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with breakpoints for all device sizes
- **Modern Stack**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **Component Library**: Reusable UI components with proper TypeScript support
- **Performance Optimized**: Built-in SEO, image optimization, and performance best practices
- **Developer Experience**: ESLint, TypeScript, and modern development tools

## 📱 Responsive Breakpoints

- `xs`: 475px (Extra small devices)
- `sm`: 640px (Small devices)
- `md`: 768px (Medium devices)
- `lg`: 1024px (Large devices)
- `xl`: 1280px (Extra large devices)
- `2xl`: 1536px (2X large devices)
- `3xl`: 1920px (3X large devices)

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tripypackage
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── sections/         # Page sections (Hero, Features)
│   └── ui/               # UI components (Button, Card, etc.)
├── lib/                  # Utility functions
├── types/                # TypeScript type definitions
└── styles/               # Additional styles
```

## 🎨 Design System

### Typography
- **Heading 1**: `text-3xl sm:text-4xl lg:text-5xl xl:text-6xl`
- **Heading 2**: `text-2xl sm:text-3xl lg:text-4xl xl:text-5xl`
- **Body Large**: `text-base sm:text-lg lg:text-xl`
- **Body Medium**: `text-sm sm:text-base lg:text-lg`

### Spacing
- **Section Padding**: `py-8 sm:py-12 lg:py-16 xl:py-20`
- **Container Padding**: `px-4 sm:px-6 lg:px-8`

### Colors
- **Primary**: Blue color palette (50-950)
- **Gray**: Neutral grays for text and backgrounds
- **Semantic**: Success, warning, error colors

## 📱 Responsive Components

### Container
```tsx
<Container size="lg" padding="md">
  Content here
</Container>
```

### Button
```tsx
<Button variant="primary" size="lg">
  Click me
</Button>
```

### Card
```tsx
<Card hover padding="md">
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>
```

## 🧪 Testing Responsiveness

1. **Browser DevTools**: Use Chrome/Firefox dev tools to test different screen sizes
2. **Mobile Testing**: Test on actual mobile devices
3. **Responsive Utilities**: Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, etc.)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

The project is ready for deployment on platforms like:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support, email hello@tripypackage.com or create an issue in the repository.
