# Lumetric - Business Insights Dashboard

A professional SaaS dashboard showcasing modern front-end development with Next.js, React, and TypeScript. Features interactive data visualizations, responsive design, and a polished user experience.

**🌐 Live Demo:** [https://opdev-lumetric.vercel.app](https://opdev-lumetric.vercel.app)

## 🚀 Tech Stack

**Frontend:** Next.js 16.1.1, React 19.2, TypeScript, Tailwind CSS v4, Shadcn UI, Recharts

## ✨ Key Features

- **Interactive Analytics:** Traffic sources, device breakdown, top pages with pie charts and bar visualizations
- **Advanced Filtering:** Real-time search and status filters for user management
- **Revenue Insights:** Month-over-month comparisons, quarterly breakdowns, and trend analysis
- **Dark Mode:** Seamless theme toggle with zero-flash loading and persistent preferences
- **Responsive Design:** Mobile-first design optimized for all screen sizes
- **Data Export:** CSV download functionality with formatted data
- **Time Period Selection:** Flexible dashboard views (Week/Month/Year)
- **Accessibility:** WCAG-compliant with proper ARIA labels and keyboard navigation

## 🏃 Quick Start

### Prerequisites

- Node.js 18+

### Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
lumetric/
├── src/
│   ├── app/              # Pages (Dashboard, Analytics, Users, Revenue)
│   ├── components/       # Reusable UI components
│   │   ├── dashboard/    # Dashboard-specific components
│   │   └── ui/          # UI primitives (shadcn/ui)
│   └── lib/             # Utilities and mock data
```

## 🎨 Design Highlights

- **Professional Color Scheme:** Carefully crafted light and dark themes with optimal contrast
- **Custom Scrollbars:** Styled scrollbars matching the design system
- **Smooth Animations:** Transitions and hover effects throughout the interface
- **Responsive Breakpoints:**
  - Mobile (< 640px): Single column layout, slide-out menu
  - Tablet (640px - 1024px): 2-column grids, optimized spacing
  - Desktop (> 1024px): Full 4-column metrics, side-by-side charts

## 🔧 Technical Implementation

- **Component Architecture:** Optimized Shadcn UI component usage with proper provider patterns
- **Performance:** Zero-flash theme loading with blocking script for instant theme application
- **Type Safety:** Full TypeScript coverage with strict type checking
- **Code Quality:** Clean, maintainable code following React and Next.js best practices
