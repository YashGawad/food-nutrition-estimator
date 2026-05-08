# 🍽️ NutriAI - Food Nutrition Estimator Frontend

A modern, professional React + Vite application for AI-powered food nutrition analysis and tracking.

## 🌟 Features

### 📸 Home Page

- Hero section with feature highlights
- AI-powered food image upload with drag & drop
- Real-time food detection and nutrition analysis
- Recent foods display with quick statistics

### 📊 Dashboard

- Comprehensive nutrition statistics overview
- Food tracking history with detailed table view
- Multi-filter options (high calories, high protein, etc.)
- Download nutrition reports
- Delete functionality for tracked foods
- Daily/historical insights

### 📐 Nutrition Calculator

- Manual nutrition value input
- Meal planner with servings calculator
- Daily nutrition tracking
- Meal history management
- Real-time calculation and summation

### ℹ️ About Page

- Company mission and vision
- Feature showcase
- How it works section
- Supported food categories
- FAQ section
- Contact information

### Navigation & Layout

- Sticky responsive header with navigation
- Mobile-friendly menu toggle
- Professional footer with social links
- Consistent design across all pages

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite 8** - Build tool and dev server
- **React Router 7** - Client-side routing
- **Lucide React** - Professional icons
- **CSS3** - Modern styling with CSS variables

## 📋 Prerequisites

- Node.js >= 16
- npm or yarn

## 🚀 Getting Started

### Installation

```bash
cd frontend
npm install
```

### Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Calculator.jsx
│   │   └── About.jsx
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── UploadForm.jsx
│   │   └── FoodList.jsx
│   ├── styles/
│   │   ├── Header.css
│   │   ├── Footer.css
│   │   ├── Home.css
│   │   ├── Dashboard.css
│   │   ├── Calculator.css
│   │   ├── About.css
│   │   ├── UploadForm.css
│   │   └── FoodList.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
└── package.json
```

## 🎨 Design System

**Colors**: Indigo primary, Green success, Red error  
**Spacing**: Consistent scale from xs to 2xl  
**Responsive**: Mobile-first design for all devices

## 🔄 API Integration

Backend API endpoints:

- `GET /api/food` - Fetch all foods
- `POST /api/food/auto-detect` - Upload and detect food
- `DELETE /api/food/{id}` - Delete food item

## 📱 Responsive Design

Fully responsive on desktop, tablet, and mobile devices.

## 🚀 Performance

- Fast Vite builds
- Lazy route loading
- Optimized rendering
- Smooth animations

---

**Version**: 2.0 - Professional Edition
