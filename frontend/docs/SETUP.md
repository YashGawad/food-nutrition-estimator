# Environment Setup & Configuration

## 📋 System Requirements

- **Node.js**: v16 or higher
- **npm**: v7 or higher (comes with Node.js)
- **OS**: Windows, macOS, or Linux
- **Browser**: Modern browser (Chrome, Firefox, Safari, Edge)

## 🔧 Installation Steps

### 1. Check Node.js Installation

```bash
node --version    # Should show v16+
npm --version     # Should show v7+
```

If not installed, download from: https://nodejs.org/

### 2. Navigate to Frontend Directory

```bash
cd d:\food-nutrition-estimator\frontend
# or
cd /path/to/food-nutrition-estimator/frontend
```

### 3. Install Dependencies

```bash
npm install
```

This installs all packages from `package.json`:

- react
- react-dom
- react-router-dom
- lucide-react
- vite
- @vitejs/plugin-react
- eslint

### 4. Verify Installation

```bash
npm list --depth=0
```

Should show all packages listed successfully.

## 🚀 Development Environment Setup

### Start Development Server

```bash
npm run dev
```

Output should show:

```
  VITE v8.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

### Access the App

Open browser and go to: `http://localhost:5173`

## 🔌 Backend API Configuration

### Backend URL

Edit API calls in code to match your backend URL:

**Current Configuration:**

- Backend URL: `http://localhost:8080`

### To Change Backend URL

Option 1: Use environment variable

```bash
# Create .env file in frontend directory
VITE_API_URL=http://your-backend-url:8080
```

Option 2: Edit in code
Search for `http://localhost:8080` in:

- `src/pages/Home.jsx`
- `src/pages/Dashboard.jsx`
- `src/components/UploadForm.jsx`

### Verify Backend Connection

1. Start backend first
2. Check backend is running: `http://localhost:8080`
3. Test API endpoint: `http://localhost:8080/api/food`
4. Should return JSON array or error

## 📦 Production Build

### Build for Production

```bash
npm run build
```

Creates optimized `dist/` folder for deployment.

### Preview Production Build

```bash
npm run preview
```

### Build Optimization

The production build includes:

- Minified JavaScript
- Optimized CSS
- Image compression
- Tree shaking
- Code splitting

## 🔍 Code Quality

### Run ESLint

```bash
npm run lint
```

Checks for code style issues.

### Fix ESLint Issues

```bash
npm run lint -- --fix
```

Auto-fixes common issues.

## 🗂️ Project Structure After Setup

```
frontend/
├── node_modules/          (Installed packages)
├── dist/                  (Build output - after npm run build)
├── src/
│   ├── pages/
│   ├── components/
│   ├── styles/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── package.json
├── vite.config.js
├── eslint.config.js
├── index.html
└── README.md
```

## 🌐 Network & CORS Setup

### If Backend is on Different Domain

Add proxy in `vite.config.js`:

```javascript
server: {
  proxy: {
    '/api': {
      target: 'http://your-backend-url:8080',
      changeOrigin: true,
    }
  }
}
```

Then use `/api/...` instead of full URL.

### Backend CORS Configuration

Backend should allow requests from:

```
http://localhost:5173
http://localhost:3000
```

## 📝 Environment Variables

Create `.env` file in frontend directory:

```
# Backend API URL
VITE_API_URL=http://localhost:8080

# App Name
VITE_APP_NAME=NutriAI

# Debug Mode
VITE_DEBUG=false
```

Access in code:

```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 🔐 Security Considerations

1. **Never commit credentials**
2. **Use .gitignore for .env files**
3. **Validate user input**
4. **Use HTTPS in production**
5. **Set proper CORS headers**
6. **Sanitize image uploads**

## 🧹 Cleanup & Maintenance

### Clear npm Cache

```bash
npm cache clean --force
```

### Update Dependencies

```bash
npm update
```

### Check for Vulnerabilities

```bash
npm audit
npm audit fix
```

### Remove Node Modules

```bash
rm -rf node_modules
npm install
```

## 🐛 Troubleshooting Setup

### Node.js Not Found

- Install from https://nodejs.org/
- Add to PATH if needed
- Restart terminal after installation

### npm install Fails

```bash
# Clear cache and try again
npm cache clean --force
npm install
```

### Port 5173 Already in Use

```bash
# Use different port
npm run dev -- --port 3000
```

### Module Not Found

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Build Fails

```bash
# Clear build artifacts
rm -rf dist
npm run build
```

## ✅ Verification Checklist

After setup, verify:

- [ ] Node.js version >= 16
- [ ] npm version >= 7
- [ ] npm install completed
- [ ] npm run dev starts successfully
- [ ] App loads at http://localhost:5173
- [ ] No console errors
- [ ] API calls work (check Network tab)
- [ ] Navigation works
- [ ] Mobile view responsive
- [ ] npm run build succeeds

## 📚 Useful Links

- Node.js Download: https://nodejs.org/
- npm Documentation: https://docs.npmjs.com/
- Vite Guide: https://vite.dev/guide/
- React Docs: https://react.dev

## 🆘 Getting Help

1. Check browser console (F12)
2. Look in Network tab for API errors
3. Check backend logs
4. Review this document
5. Check README.md and QUICKSTART.md

---

**Setup Complete!** You're ready to start developing. 🚀
