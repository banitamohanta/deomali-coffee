# Deomali Coffee Cafe & Roastery

A premium, aesthetic, fully responsive mobile-first landing page for Deomali Coffee Cafe & Roastery in Bhubaneswar, Odisha.

## Aesthetic: Minimalist Earthy Luxury

- **Color Palette**: Deep espresso browns, warm creamy off-whites, muted forest greens
- **Typography**: Playfair Display (headings), Inter (body text)
- **Design Philosophy**: Clean, warm, grounded in Odisha's coffee heritage

## Features

### Sections
1. **Navigation Bar** — Logo placeholder, smooth-scroll links, mobile hamburger menu
2. **Hero Section** — Full-height coffee roasting background, headline, CTA
3. **Our Story** — Two-column layout with Deomali hills imagery, brand narrative
4. **The Menu** — Tabbed categories (Hot Coffees, Cold Brews, Frappes, Quick Bites) with prices in INR
5. **Footer** — Address, hours, social icons
6. **WhatsApp Floating Button** — Bottom-right corner

### Technical Features
- Mobile-first responsive design
- Framer Motion scroll animations
- Smooth scroll navigation
- Tabbed menu with hover lift effects
- Google Fonts (Playfair Display + Inter)
- Lucide React icons

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Inter)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment

Ready to deploy on **Vercel** or **Netlify**:

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the 'out' or 'dist' folder
```

## Customization

### Replace Logo
Replace `/public/images/logo-placeholder.svg` with your actual cafe logo image and update the `src` in `components/navbar.tsx`.

### Update WhatsApp Number
Change the phone number in:
- `components/whatsapp-button.tsx`
- `components/sections/footer.tsx`

### Update Images
The hero and story sections use Unsplash placeholder images. Replace with your own:
- Hero: Coffee roasting image
- Story: Deomali hills / coffee farmers image

### Menu Prices
All prices are in INR (₹). Edit in `components/sections/menu.tsx`.

## Menu Items

### Hot Coffees
Espresso, Filter Coffee, Americano, Cafe Latte, Cappuccino, Mocha, Flat White

### Cold Brews & Iced
Vietnamese Cold Coffee, Caramel Cold Coffee, Hazelnut Iced Latte, Classic Cold Brew, Irish Black Coffee

### Frappes & Shakes
Classic Frappe, Choco Chip Mocha Frappe, Vanilla Bean Shake

### Quick Bites & Bakery
Butter Croissant, Choco Lava Cake, Grilled Chicken Sandwich, Peri Peri Fries, Garlic Bread with Cheese

## License

MIT License
