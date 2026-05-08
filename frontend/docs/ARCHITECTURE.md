# 🗺️ Frontend Architecture & Navigation Map

## 🏗️ Application Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    NutriAI Frontend App                 │
│                    React + Vite + Router                │
└─────────────────────────────────────────────────────────┘
                            │
                    ┌───────┴───────┐
                    │               │
            ┌───────▼────────┐  ┌──▼──────────┐
            │   Header Comp  │  │ Footer Comp │
            │                │  │             │
            │ - Navigation   │  │ - Links     │
            │ - Mobile Menu  │  │ - Contact   │
            │ - Logo         │  │ - Social    │
            └────────────────┘  └─────────────┘
                    │
        ┌───────────┼───────────┐
        │                       │
    ┌───▼───────┐        ┌──────▼──────┐
    │   Routes  │        │     Router  │
    │           │        │             │
    │ - Home /  │        │ - BrowserR. │
    │ - Dash /d │        │ - Routes    │
    │ - Calc /c │        │ - Links     │
    │ - About/a │        │ - Outlets   │
    └───┬───────┘        └─────────────┘
        │
    ┌───┴───────────────────────────────┬─────────┐
    │                                   │         │
┌───▼────────┐  ┌──────────┐  ┌───────▼──┐  ┌──▼──────────┐
│   Home     │  │Dashboard │  │Calculator│  │    About    │
│            │  │          │  │          │  │             │
│ Hero       │  │ Stats    │  │ Inputs   │  │ Mission     │
│ Upload     │  │ History  │  │ Planner  │  │ Features    │
│ Recent     │  │ Filters  │  │ Daily    │  │ HowWorks    │
│ Foods      │  │ Download │  │ Tracker  │  │ FAQ         │
└────────────┘  └──────────┘  └──────────┘  └─────────────┘
    │                │              │              │
    │                │              │              │
    ├────────────────┼──────────────┼──────────────┤
    │         Sub-Components        │              │
    │                               │              │
    └───────────┬───────────────────┘              │
                │                                  │
        ┌───────┴──────────┐                       │
        │                  │                       │
    ┌───▼──────┐      ┌────▼────┐                 │
    │UploadForm│      │FoodList │                 │
    │          │      │         │                 │
    │ - Input  │      │ - Cards │                 │
    │ - Drag/D │      │ - Copy  │                 │
    │ - Preview│      │ - Delete│                 │
    │ - Upload │      │ - Icons │                 │
    └──────────┘      └─────────┘                 │
                                                  │
                    (Shared across pages)         │
                                              no change
```

## 🌐 Page Flow Diagram

```
START
  │
  ▼
┌──────────────────────────────────────┐
│        NutriAI Home Page             │
│  (Landing with upload & features)   │
│                                      │
│  [Upload Image] ──────┐              │
│  [Dashboard Link]     │              │
│  [Calculator Link]    │              │
│  [About Link]         │              │
│  [Recent Foods]       │              │
└──────────────────────────────────────┘
  │          │              │              │
  │          ▼              ▼              ▼
  │    ┌──────────┐  ┌────────────┐  ┌──────────┐
  │    │Dashboard │  │Calculator  │  │  About   │
  │    │          │  │            │  │          │
  │    │• Stats   │  │• Nutrition │  │• Info    │
  │    │• History │  │• Planner   │  │• FAQ     │
  │    │• Track   │  │• Totals    │  │• Contact │
  │    └──────────┘  └────────────┘  └──────────┘
  │         │              │              │
  └─────────┴──────────────┴──────────────┘
       (All interlinked via Header Navigation)
```

## 📊 Component Hierarchy

```
App
├── Header
│   ├── Logo
│   ├── Nav (responsive)
│   │   ├── Home Link
│   │   ├── Dashboard Link
│   │   ├── Calculator Link
│   │   └── About Link
│   └── Mobile Menu Toggle
│
├── Main Routes
│   ├── Route: /
│   │   └── Home
│   │       ├── Hero Section
│   │       ├── UploadForm
│   │       │   ├── File Input
│   │       │   ├── Preview
│   │       │   └── Upload Button
│   │       └── FoodList
│   │           └── FoodCard(s)
│   │               ├── Image
│   │               ├── Nutrition Grid
│   │               └── Actions
│   │
│   ├── Route: /dashboard
│   │   └── Dashboard
│   │       ├── Stats Grid
│   │       │   ├── StatCard(s)
│   │       │   ├── TotalFoods
│   │       │   ├── TotalCalories
│   │       │   ├── TotalProtein
│   │       │   ├── TotalCarbs
│   │       │   └── TotalFat
│   │       ├── Filter Tabs
│   │       ├── FoodsTable
│   │       │   ├── TableHead
│   │       │   └── TableRow(s)
│   │       └── DownloadBtn
│   │
│   ├── Route: /calculator
│   │   └── Calculator
│   │       ├── Inputs Section
│   │       │   ├── CaloriesInput
│   │       │   ├── ProteinInput
│   │       │   ├── CarbsInput
│   │       │   ├── FatInput
│   │       │   ├── ServingsInput
│   │       │   └── CalculateBtn
│   │       ├── Results Section
│   │       │   ├── ResultCard(s)
│   │       │   ├── AddBtn
│   │       │   └── ResetBtn
│   │       └── Planner Section
│   │           ├── MealCard(s)
│   │           ├── DailyTotal
│   │           └── Stats
│   │
│   └── Route: /about
│       └── About
│           ├── Hero Section
│           ├── Mission Section
│           ├── Features Grid
│           ├── HowWorks Steps
│           ├── Categories
│           ├── Stats
│           ├── ContactSection
│           └── FAQ Grid
│
└── Footer
    ├── Column: About
    ├── Column: Links
    ├── Column: Features
    ├── Column: Contact
    └── Bottom: Copyright & Legal
```

## 🔄 Data Flow

```
Upload Image
    │
    ▼
┌─────────────────────┐
│  Form Data         │
│  (FormData + File) │
└─────────────────────┘
    │
    ▼
┌─────────────────────────────────────┐
│  POST /api/food/auto-detect        │
│  (Backend AI Detection)             │
└─────────────────────────────────────┘
    │
    ▼
┌─────────────────────┐
│  Detection Result  │
│  {name, nutrition} │
└─────────────────────┘
    │
    ▼
┌─────────────────────────┐
│  GET /api/food         │
│  (Fetch All Foods)     │
└─────────────────────────┘
    │
    ▼
┌──────────────────────────┐
│  Food Array             │
│  [{...}, {...}, ...]    │
└──────────────────────────┘
    │
    ├──▶ Home Page     (Display Recent)
    ├──▶ Dashboard     (Display All + Stats)
    └──▶ Calculator    (Manual Entry)
```

## 📱 Responsive Breakpoints

```
Mobile (< 768px)
├─ Single column layout
├─ Full width cards
├─ Stacked navigation
├─ Touch-optimized buttons
└─ Compact spacing

       ⬇️ Tablet (768-1199px) ⬇️

Tablet (768-1199px)
├─ 2 column layout
├─ Flexible cards
├─ Horizontal navigation
├─ Medium spacing
└─ Optimized for touch

       ⬇️ Desktop (≥ 1200px) ⬇️

Desktop (≥ 1200px)
├─ 3-4 column layout
├─ Full sidebar ready
├─ Fixed navigation
├─ Generous spacing
└─ Mouse optimized
```

## 🎨 Styling Layers

```
┌─────────────────────────────────┐
│     Global Styles               │
│    (src/index.css)              │
│                                 │
│  • CSS Variables                │
│  • Typography                   │
│  • Base Elements                │
│  • Color System                 │
│  • Spacing Scale                │
└─────────────────────────────────┘
         ⬇️
┌─────────────────────────────────┐
│     App Styles                  │
│    (src/App.css)                │
│                                 │
│  • Layout Structure             │
│  • Global Utilities             │
│  • Animations                   │
│  • Common Patterns              │
└─────────────────────────────────┘
         ⬇️
┌─────────────────────────────────┐
│  Component Styles               │
│  (src/styles/*)                 │
│                                 │
│  • Header.css                   │
│  • Footer.css                   │
│  • Home.css                     │
│  • Dashboard.css                │
│  • Calculator.css               │
│  • About.css                    │
│  • UploadForm.css               │
│  • FoodList.css                 │
└─────────────────────────────────┘
```

## 🔌 API Integration Points

```
Home Page
├─ POST /api/food/auto-detect    (Upload Image)
└─ GET /api/food                 (Recent Foods)

Dashboard Page
├─ GET /api/food                 (All Foods)
├─ DELETE /api/food/{id}         (Delete Item)
└─ Calculate Stats               (Frontend)

Calculator Page
├─ No API calls                  (Local State)
└─ Manual Calculations           (Frontend)

About Page
├─ No API calls                  (Static Content)
└─ No Data Fetching              (Frontend)
```

## 🎯 User Journey

```
VISITOR LANDS
    │
    ▼
Home Page
├─ Learns about features
├─ Uploads food image
│   │
│   ▼
│   Image detected
│   Result shown
│   │
│   ▼
│   Clicks Dashboard link
│   │
└──▶ Dashboard Page
    ├─ Views all tracked foods
    ├─ Sees statistics
    ├─ Can delete items
    ├─ Downloads report
    │
    ├─ Clicks Calculator link
    │   │
    │   ▼
    │   Calculator Page
    │   ├─ Plans meals
    │   ├─ Calculates totals
    │   └─ Tracks daily intake
    │
    └─ Clicks About link
        │
        ▼
        About Page
        ├─ Reads about service
        ├─ Views FAQ
        └─ Gets contact info
```

## 📊 State Management

```
App Level (Top)
│
├─ Global State
│   └─ Router State (React Router)
│       └─ Current Route
│       └─ Navigation Params
│
└─ Component Level
    │
    ├─ Home
    │   ├─ foods: []
    │   ├─ loading: bool
    │   └─ file: File | null
    │
    ├─ Dashboard
    │   ├─ foods: []
    │   ├─ stats: {...}
    │   ├─ filter: string
    │   └─ loading: bool
    │
    ├─ Calculator
    │   ├─ inputs: {...}
    │   ├─ result: {...}
    │   ├─ meals: []
    │   └─ dailyTotal: {...}
    │
    └─ About
        └─ Static Content
```

## 🚀 Build & Deployment Flow

```
┌──────────────────────┐
│   Development        │
│   npm run dev        │
│   localhost:5173     │
└──────────────────────┘
        │
        ▼ (npm run build)
┌──────────────────────┐
│   Build Process      │
│   - Minify JS        │
│   - Minify CSS       │
│   - Optimize Assets  │
│   - Tree Shake       │
└──────────────────────┘
        │
        ▼
┌──────────────────────┐
│   dist/ Folder       │
│   - index.html       │
│   - assets/          │
│   - manifest.json    │
└──────────────────────┘
        │
        ▼ (Deploy)
┌──────────────────────┐
│   Production Server  │
│   - Vercel           │
│   - Netlify          │
│   - Static Host      │
│   - Docker           │
└──────────────────────┘
```

---

**Architecture Version**: 2.0  
**Last Updated**: May 2026  
**Status**: ✅ Complete

This architecture supports the current features and is ready for scaling! 🚀
