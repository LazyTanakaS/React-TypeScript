# Expenses Tracker App# React + TypeScript + Vite

A modern expense tracker application with beautiful design, animations, and comprehensive financial management features.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

![React](https://img.shields.io/badge/React-18-blue?logo=react)Currently, two official plugins are available:

![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)

![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Features

## React Compiler

- **Multi-month management** - track different months separately

- **Income & Expense tracking** - separate forms with validationThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

- **Real-time statistics** - income, expenses, and balance display

- **Transaction categories** - organized by type (Salary, Food, Transport, etc.)## Expanding the ESLint configuration

- **Subscription tracking** - monitor recurring payments

- **Edit & Delete** - modify or remove transactionsIf you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- **Filter system** - by type and category

- **Auto-save to localStorage** - data persists on reload```js

- **Month closing** - lock completed monthsexport default defineConfig([

- Modern gradient design with dark theme globalIgnores(['dist']),

- Smooth animations and micro-interactions {

- Fully responsive interface files: ['**/*.{ts,tsx}'],

  extends: [

## Technologies // Other configs...

- **React 18** - UI library // Remove tseslint.configs.recommended and replace with this

- **TypeScript 5** - type safety tseslint.configs.recommendedTypeChecked,

- **Vite 7** - fast build tool // Alternatively, use this for stricter rules

- **React Icons** - professional icon library tseslint.configs.strictTypeChecked,

- **CSS3** - advanced animations and effects // Optionally, add this for stylistic rules

- **LocalStorage API** - data persistence tseslint.configs.stylisticTypeChecked,

## Installation and Running // Other configs...

    ],

```bash languageOptions: {

# Install dependencies      parserOptions: {

npm install        project: ['./tsconfig.node.json', './tsconfig.app.json'],

        tsconfigRootDir: import.meta.dirname,

# Run development server      },

npm run dev      // other options...

    },

# Build for production  },

npm run build])

```

# Preview production build

npm run previewYou can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

````

```js

## Project Structure// eslint.config.js

import reactX from 'eslint-plugin-react-x'

```textimport reactDom from 'eslint-plugin-react-dom'

expenses-tracker/

├── src/export default defineConfig([

│   ├── components/  globalIgnores(['dist']),

│   │   ├── ConfirmModal.tsx           # Confirmation dialog  {

│   │   ├── EditTransactionModal.tsx   # Edit transaction form    files: ['**/*.{ts,tsx}'],

│   │   ├── Header.tsx                 # Stats display    extends: [

│   │   ├── InitialSetupModal.tsx      # First launch setup      // Other configs...

│   │   ├── Modal.tsx                  # Base modal wrapper      // Enable lint rules for React

│   │   ├── SideBar.tsx                # Month navigation      reactX.configs['recommended-typescript'],

│   │   ├── Subscriptions.tsx          # Subscription tracker      // Enable lint rules for React DOM

│   │   ├── TransactionForm.tsx        # Add transaction forms      reactDom.configs.recommended,

│   │   ├── TransactionItem.tsx        # Transaction display    ],

│   │   └── TransactionList.tsx        # List with filters    languageOptions: {

│   ├── types/      parserOptions: {

│   │   └── types.ts                   # TypeScript types        project: ['./tsconfig.node.json', './tsconfig.app.json'],

│   ├── utils/        tsconfigRootDir: import.meta.dirname,

│   │   ├── calculations.ts            # Financial calculations      },

│   │   └── localStorage.ts            # Storage utilities      // other options...

│   ├── App.tsx                        # Main component    },

│   ├── App.css                        # Application styles  },

│   ├── main.tsx                       # Entry point])

│   └── index.css                      # Global styles```

├── public/                            # Static files
├── package.json                       # Dependencies
├── vite.config.ts                     # Vite configuration
└── tsconfig.json                      # TypeScript configuration
````

## What I Learned

### TypeScript

- Complex type definitions: `Transaction`, `Month`, `MonthData`
- Union types: `type: "income" | "expense"`
- Enum-like types: `IncomeCategory`, `ExpensesCategory`
- Interface composition and reuse
- Type guards and narrowing
- Generic types with `Omit<T, K>`
- Optional properties with `?`

### React Hooks

- `useState` - complex state management
- `useEffect` - data synchronization with localStorage
- `useMemo` - performance optimization for calculations
- Controlled components for forms
- Multiple state updates in one function
- Functional state updates for immutability

### Data Management

- **localStorage** - complete app state persistence
- Nested data structures (months → transactions)
- CRUD operations (Create, Read, Update, Delete)
- Data filtering and sorting
- Financial calculations (totals, balances)
- Month status management (open/closed)

### CSS Advanced Techniques

- CSS Variables (`:root`) for theming
- Keyframe animations (`fadeIn`, `slideIn`, `spin`)
- Backdrop filter effects
- Custom scrollbars
- Sticky positioning
- Smooth scroll behavior
- Micro-interactions and hover effects
- Gradient backgrounds
- Box shadows for depth
- Loading states with spinners

### Component Architecture

- Modal system with reusable wrapper
- Form validation and error handling
- Conditional rendering patterns
- Props drilling and callbacks
- Component composition
- Empty states design

## Main Components

### App.tsx

Main component with application logic:

- Month management
- Transaction CRUD operations
- Modal state control
- Data persistence
- Initial setup flow

### Header.tsx

Statistics display with real-time calculations:

```typescript
- Total income (green)
- Total expenses (red)
- Balance (blue)
```

### SideBar.tsx

Month navigation sidebar:

- Active month indicator
- Add new month button
- Close month functionality
- Month list with icons

### TransactionForm.tsx

Dual form system:

- Income form (green theme)
- Expense form (red theme)
- Category selection
- Date picker
- Amount validation

### TransactionList.tsx

Transaction display with filtering:

- Type filter (All/Income/Expense)
- Category filter
- Empty state with helpful messages
- Transaction cards with actions

### Subscriptions.tsx

Recurring payment tracker:

- Filter subscription transactions
- Total calculation
- Monthly recurring indicator

## Implementation Features

1. **Multi-month support**: Separate tracking for different months
2. **Auto-save**: All changes automatically saved to localStorage
3. **Validation**: Amount and date validation before saving
4. **Filters**: Multiple filter combinations (type + category)
5. **Loading states**: Visual feedback for all async operations
6. **Empty states**: Helpful messages when no data
7. **Animations**: Smooth entrance and interaction animations
8. **Responsive**: Works on mobile, tablet, and desktop
9. **Dark theme**: Eye-friendly dark color scheme
10. **Accessibility**: Proper focus states and keyboard navigation

## Financial Calculations

```typescript
// Total Income
const totalIncome = transactions
  .filter((t) => t.type === "income")
  .reduce((sum, t) => sum + t.amount, 0);

// Total Expenses
const totalExpenses = transactions
  .filter((t) => t.type === "expense")
  .reduce((sum, t) => sum + t.amount, 0);

// Balance
const balance = totalIncome - totalExpenses;

// Subscriptions
const subscriptions = transactions.filter(
  (t) => t.type === "expense" && t.category === "Subscriptions",
);
```

## CSS Features

### Animations

- `fadeIn` - smooth element appearance
- `fadeInScale` - modal entrance effect
- `slideInRight` - sidebar month items
- `slideInLeft` - sidebar entrance
- `spin` - loading spinners
- `pulse` - empty state icons

### Color System

```css
--bg-primary: #0f0f0f /* Main background */ --bg-secondary: #1a1a1a /* Cards */
  --bg-tertiary: #2d2d2d /* Inputs */ --income: #10b981 /* Green */
  --expense: #ef4444 /* Red */ --accent: #8b5cf6 /* Purple */;
```

### Micro-interactions

- Ripple effects on buttons
- Color bars on hover
- Scale transformations
- Smooth shadows
- Active state feedback

## Usage Example

1. **First Launch**: Set your starting balance
2. **Add Month**: Create a month (e.g., "February 2026")
3. **Add Income**: Enter salary or other income
4. **Add Expense**: Track your spending
5. **View Stats**: Check balance in header
6. **Filter**: Use filters to analyze spending
7. **Edit/Delete**: Modify or remove transactions
8. **Close Month**: Lock the month when done

## Categories

### Income Categories

- Salary
- Freelance
- Business
- Investments
- Gifts
- Other

### Expense Categories

- Food
- Transport
- Housing
- Entertainment
- Healthcare
- Education
- Subscriptions
- Other

## Commits

```bash
git commit -m "feat: add expense tracker with multi-month support and localStorage"
git commit -m "feat: add transaction editing and deletion"
git commit -m "feat: add subscription tracking"
git commit -m "style: add animations and micro-interactions"
git commit -m "style: improve typography and empty states"
```

## Design Highlights

- **Purple gradient header** with real-time stats
- **Dual-form layout** for income/expenses
- **Color-coded transactions** (green/red indicators)
- **Sticky filters** for easy access while scrolling
- **Professional icons** from react-icons library
- **Loading states** with animated spinners
- **Empty states** with helpful illustrations
- **Smooth animations** on all interactions

## Performance Optimizations

- `useMemo` for expensive calculations
- Lazy state initialization
- Efficient array filtering
- Debounced localStorage writes
- Optimized re-renders

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Future Enhancements

- [ ] Charts and graphs
- [ ] Export to CSV/PDF
- [ ] Budget planning
- [ ] Currency conversion
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Cloud sync

---

Made with ❤️ using React + TypeScript + React Icons
