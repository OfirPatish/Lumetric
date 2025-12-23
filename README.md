# Lumetric - Business Insights Dashboard

A professional SaaS dashboard showcasing modern front-end development with Next.js, React, and TypeScript. Features interactive data visualizations, responsive design, and a polished user experience.

**🌐 Live Demo:** [https://opdev-lumetric.vercel.app](https://opdev-lumetric.vercel.app)

## 🚀 Tech Stack

**Frontend:** Next.js 15.5.7, React 19.1, TypeScript, Tailwind CSS v4, Shadcn UI, Recharts

## ✨ Key Features

- **Interactive Charts:** Revenue, users, and engagement visualizations
- **Dark Mode:** Theme toggle with persistent preferences
- **Responsive Design:** Mobile-first design for all screen sizes
- **Data Export:** CSV download functionality
- **Multi-page Navigation:** Dashboard, Analytics, Users, and Revenue pages

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

## 🎨 Responsive Design

- **Mobile** (< 640px): Single column layout, slide-out menu
- **Tablet** (640px - 1024px): 2-column grids, optimized spacing
- **Desktop** (> 1024px): Full 4-column metrics, side-by-side charts
