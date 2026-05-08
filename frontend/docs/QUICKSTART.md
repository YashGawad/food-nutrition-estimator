# 🚀 Quick Start Guide - NutriAI Frontend

## Installation & Setup (5 minutes)

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Your app will be available at: **http://localhost:5173**

### 3. Backend Requirement

Make sure your backend is running on `${import.meta.env.VITE_API_URL}`:

- Check your backend is started
- Verify API endpoints are responding
- CORS should be configured for localhost

## 📍 Navigation Map

| Page          | URL           | Features                              |
| ------------- | ------------- | ------------------------------------- |
| 🏠 Home       | `/`           | Upload food, view recent detections   |
| 📊 Dashboard  | `/dashboard`  | Statistics, history, download reports |
| 📐 Calculator | `/calculator` | Nutrition planner, meal tracking      |
| ℹ️ About      | `/about`      | Information, FAQ, contact             |

## 🎯 How to Use

### Uploading Food

1. Go to **Home** page
2. Drag & drop an image or click "Select from device"
3. Click "Analyze Food 🔍"
4. View results in Dashboard

### Tracking Nutrition

1. Go to **Dashboard**
2. View all detected foods
3. Use filters to organize
4. Download reports

### Planning Meals

1. Go to **Calculator**
2. Enter nutrition values
3. Set servings
4. Add to planner
5. See daily totals

### Learning More

1. Go to **About**
2. Read about features
3. Check FAQ
4. Contact information

## 🔧 Available Commands

```bash
# Development
npm run dev        # Start dev server

# Production
npm run build      # Build for production
npm run preview    # Preview production build

# Linting
npm run lint       # Check code quality
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (phones)
- **Tablet**: 768px - 1199px (tablets)
- **Desktop**: ≥ 1200px (computers)

Test on mobile: Open dev tools → Toggle device toolbar

## 🎨 Customization

### Change Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #6366f1; /* Change this */
  --success-color: #10b981;
  /* ... other colors */
}
```

### Add New Pages

1. Create file in `src/pages/NewPage.jsx`
2. Create style file `src/styles/NewPage.css`
3. Add route in `src/App.jsx`:

```jsx
<Route path="/new-page" element={<NewPage />} />
```

4. Add nav link in `src/components/Header.jsx`

## 🐛 Common Issues

### Port 5173 Already in Use

```bash
npm run dev -- --port 3000
```

### Backend Connection Failed

- Check backend is running on port 8080
- Check network connectivity
- Clear browser cache (Ctrl+Shift+Delete)

### Styles Not Applying

- Clear node_modules: `rm -rf node_modules && npm install`
- Hard refresh browser (Ctrl+Shift+R)

### Build Errors

```bash
# Clean and rebuild
rm -rf dist node_modules package-lock.json
npm install
npm run build
```

## 📊 API Endpoints Required

Your backend must have these endpoints:

```
GET  /api/food                    - Get all foods
POST /api/food/auto-detect        - Upload and detect food
DELETE /api/food/{id}             - Delete a food item
```

Response format for `/api/food`:

```json
[
  {
    "id": 1,
    "name": "Biryani",
    "calories": 450,
    "protein": 12,
    "carbs": 65,
    "fat": 15,
    "imageUrl": "https://..."
  }
]
```

## 🎓 Learning Resources

- **React**: https://react.dev
- **Vite**: https://vite.dev
- **React Router**: https://reactrouter.com
- **Lucide Icons**: https://lucide.dev

## 💡 Tips & Tricks

1. **Use DevTools**: F12 to inspect elements
2. **Network Tab**: Check API calls
3. **Console**: Look for errors
4. **Mobile Testing**: Use responsive design mode
5. **Performance**: Use Chrome DevTools Lighthouse

## 🚀 Deployment

### Build the App

```bash
npm run build
```

This creates a `dist/` folder ready for deployment.

### Deploy to Services

- **Vercel**: `vercel` command
- **Netlify**: Drag & drop `dist/` folder
- **GitHub Pages**: Configure in package.json
- **Docker**: Create Dockerfile with Node.js

## 📞 Support

- Check the **About** page for contact info
- Look at code comments for explanations
- Check browser console for error messages
- Review API response in Network tab

## ✅ Verification Checklist

Before deploying, verify:

- [ ] Frontend loads at http://localhost:5173
- [ ] Navigation works between pages
- [ ] Image upload works
- [ ] API calls succeed
- [ ] Mobile view is responsive
- [ ] No console errors
- [ ] Build completes successfully

## 🎉 You're Ready!

Your professional NutriAI frontend is ready to use.

**Happy coding!** 🚀

---

**Version**: 2.0  
**Last Updated**: May 2026
