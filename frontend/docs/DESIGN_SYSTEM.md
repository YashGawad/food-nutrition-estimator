# 🎨 Design System & CSS Variables

## Color Palette

### Primary Colors

```css
--primary-color: #6366f1; /* Indigo - Main brand color */
--primary-dark: #4f46e5; /* Darker indigo - Hover states */
--primary-light: #818cf8; /* Lighter indigo - Accents */
```

### Semantic Colors

```css
--secondary-color: #10b981; /* Teal - Secondary actions */
--success-color: #10b981; /* Green - Success states */
--error-color: #ef4444; /* Red - Errors & deletions */
--warning-color: #f59e0b; /* Amber - Warnings */
```

### Neutral Colors

```css
--background: #ffffff; /* Page background */
--background-alt: #f9fafb; /* Alternative background */
--surface: #f3f4f6; /* Surface/card background */
--border-color: #e5e7eb; /* Borders & dividers */
--text-primary: #1f2937; /* Main text color */
--text-secondary: #6b7280; /* Secondary text */
--text-light: #9ca3af; /* Light text */
```

## Spacing System

### Scale

```css
--spacing-xs: 0.25rem; /* 4px */
--spacing-sm: 0.5rem; /* 8px */
--spacing-md: 1rem; /* 16px */
--spacing-lg: 1.5rem; /* 24px */
--spacing-xl: 2rem; /* 32px */
--spacing-2xl: 3rem; /* 48px */
```

### Usage Examples

```css
padding: var(--spacing-lg); /* Padding */
margin: var(--spacing-md); /* Margins */
gap: var(--spacing-sm); /* Grid gaps */
```

## Border Radius

### Scale

```css
--radius-sm: 0.375rem; /* 6px - Small elements */
--radius-md: 0.5rem; /* 8px - Buttons, inputs */
--radius-lg: 0.75rem; /* 12px - Cards */
--radius-xl: 1rem; /* 16px - Large cards */
--radius-2xl: 1.5rem; /* 24px - Sections */
```

### Usage

```css
border-radius: var(--radius-md); /* Input fields */
border-radius: var(--radius-xl); /* Cards */
border-radius: var(--radius-2xl); /* Sections */
```

## Shadow System

### Scale

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

### Depth Levels

```css
/* Subtle shadows */
box-shadow: var(--shadow-sm); /* Minimal depth */

/* Standard shadows */
box-shadow: var(--shadow-md); /* Default cards */

/* Prominent shadows */
box-shadow: var(--shadow-lg); /* Hover states */

/* Maximum depth */
box-shadow: var(--shadow-xl); /* Modals, overlays */
```

## Transitions

### Animation

```css
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### Usage

```css
transition: var(--transition); /* Smooth animations */
transition:
  transform 0.3s,
  color 0.3s; /* Specific properties */
```

## Typography

### Font Stack

```css
font-family:
  -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
  "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
```

### Sizes

```
h1: 2.5rem  (40px)
h2: 2rem    (32px)
h3: 1.5rem  (24px)
h4: 1.25rem (20px)
p:  1rem    (16px)
sm: 0.875rem (14px)
xs: 0.75rem  (12px)
```

### Weights

```
Light:   300
Regular: 400
Medium:  500
Semi:    600
Bold:    700
```

## Component Patterns

### Buttons

```css
/* Primary button */
background: linear-gradient(
  135deg,
  var(--primary-color) 0%,
  var(--primary-dark) 100%
);
color: white;
padding: var(--spacing-md) var(--spacing-lg);
border-radius: var(--radius-lg);
border: none;
cursor: pointer;
transition: var(--transition);
```

### Cards

```css
background: white;
border-radius: var(--radius-xl);
padding: var(--spacing-lg);
box-shadow: var(--shadow-md);
transition: var(--transition);
```

### Inputs

```css
padding: var(--spacing-md);
border: 2px solid var(--border-color);
border-radius: var(--radius-md);
font-size: 1rem;
transition: var(--transition);
```

### Badges

```css
background: var(--surface);
color: var(--text-primary);
padding: var(--spacing-sm) var(--spacing-md);
border-radius: var(--radius-md);
font-weight: 600;
font-size: 0.875rem;
```

## State Styles

### Hover

```css
:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  color: var(--primary-color);
}
```

### Active

```css
.active {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}
```

### Disabled

```css
:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
```

### Focus

```css
:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  border-color: var(--primary-color);
}
```

## Responsive Breakpoints

### Mobile First Approach

```css
/* Mobile (default) */
.grid {
  grid-template-columns: 1fr;
}

/* Tablet and up */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop and up */
@media (min-width: 1200px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Animation Keyframes

### Fade In

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Fade Up

```css
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(-5px);
  }
}
```

### Spin

```css
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

### Slide In

```css
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Utility Classes

### Container

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}
```

### Grid Layouts

```css
.grid {
  display: grid;
  gap: var(--spacing-lg);
}

.grid-auto {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

### Flexbox

```css
.flex {
  display: flex;
  gap: var(--spacing-md);
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Text

```css
.text-center {
  text-align: center;
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

### Visibility

```css
.hidden {
  display: none;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
}
```

## Dark Mode Ready

The design system is structured to support dark mode:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #1f2937;
    --text-primary: #f3f4f6;
    /* ... other overrides ... */
  }
}
```

## Accessibility

### Color Contrast

- Primary text on light: #1f2937 (WCAG AAA)
- Secondary text on light: #6b7280 (WCAG AA)
- Buttons: All meet WCAG AAA standards

### Focus Indicators

```css
:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}
```

### Motion

Respects `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Best Practices

1. **Always use variables** - Never hardcode colors or sizes
2. **Follow spacing scale** - Use predefined spacing values
3. **Maintain consistency** - Same patterns across components
4. **Use semantic colors** - Use --success, --error, not custom colors
5. **Responsive first** - Mobile sizes by default
6. **Accessible colors** - Sufficient contrast ratios
7. **Smooth transitions** - Use --transition variable
8. **Consistent shadows** - Use shadow scale

## Integration Example

```jsx
// React Component with CSS Variables
export function Button({ variant = "primary" }) {
  return <button className={`btn btn-${variant}`}>Click Me</button>;
}
```

```css
/* CSS using variables */
.btn {
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-lg);
  border: none;
  cursor: pointer;
  transition: var(--transition);
  font-weight: 600;
}

.btn-primary {
  background: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-dark);
  box-shadow: var(--shadow-lg);
}
```

---

**Design System Version**: 1.0  
**Last Updated**: May 2026

_This design system ensures consistency and maintainability across the entire application._
