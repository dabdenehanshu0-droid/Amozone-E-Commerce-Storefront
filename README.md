# 🛒 Amozone — E-Commerce Storefront

An Amazon-inspired e-commerce storefront UI built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui.

---

## ✨ Features

- **Responsive Header** — Logo, category-filtered search bar, user account icon, and cart with item badge
- **Navigation Bar** — Quick links for Today's Deals, Customer Service, Gift Cards, and more
- **Hero Banner** — Full-width promotional section with call-to-action buttons
- **Shop by Category** — Icon-based grid covering Electronics, Computers, Audio, Home & Garden, Books, Fashion, Automotive, and Gaming
- **Featured Products** — Product cards displaying image, title, price, original price, discount badge, star rating, and review count
- **Footer** — Site-wide footer with standard e-commerce links
- **Dark / Light theming** — Powered by `next-themes`
- **Fully responsive** — Mobile-first layout using Tailwind CSS breakpoints

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com/) | Accessible component library |
| [Radix UI](https://www.radix-ui.com/) | Headless primitives |
| [React Router v6](https://reactrouter.com/) | Client-side routing |
| [TanStack Query](https://tanstack.com/query) | Data fetching & caching |
| [Lucide React](https://lucide.dev/) | Icon set |
| [Recharts](https://recharts.org/) | Charting (optional use) |

---

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ and npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/amozone.git

# 2. Navigate into the project
cd amozone

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:8080`.

---

## 🛠️ Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Production build |
| `npm run build:dev` | Development build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## 📁 Project Structure

```
src/
├── assets/          # Images (hero banner, product photos)
├── components/
│   ├── ui/          # shadcn/ui base components
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── CategoriesSection.tsx
│   ├── FeaturedProducts.tsx
│   ├── ProductCard.tsx
│   └── Footer.tsx
├── App.tsx
└── main.tsx
```

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
