# Expenses Tracker App# Expenses Tracker App# React + TypeScript + Vite

A modern expense tracker application with beautiful design, animations, and comprehensive financial management features.A modern expense tracker application with beautiful design, animations, and comprehensive financial management features.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

![React](https://img.shields.io/badge/React-18-blue?logo=react)![React](https://img.shields.io/badge/React-18-blue?logo=react)Currently, two official plugins are available:

![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)

![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)

## Features![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- **Multi-month management** - track different months separately- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- **Income & Expense tracking** - separate forms with validation

- **Real-time statistics** - income, expenses, and balance display## Features

- **Transaction categories** - organized by type (Salary, Food, Transport, etc.)

- **Subscription tracking** - monitor recurring payments## React Compiler

- **Edit & Delete** - modify or remove transactions

- **Filter system** - by type and category- **Multi-month management** - track different months separately

- **Auto-save to localStorage** - data persists on reload

- **Month closing** - lock completed months- **Income & Expense tracking** - separate forms with validationThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

- Modern gradient design with dark theme

- Smooth animations and micro-interactions- **Real-time statistics** - income, expenses, and balance display

- Fully responsive interface

- **Transaction categories** - organized by type (Salary, Food, Transport, etc.)## Expanding the ESLint configuration

## Technologies

- **Subscription tracking** - monitor recurring payments

- **React 18** - UI library

- **TypeScript 5** - type safety- **Edit & Delete** - modify or remove transactionsIf you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- **Vite 7** - fast build tool

- **React Icons** - professional icon library- **Filter system** - by type and category

- **CSS3** - advanced animations and effects

- **LocalStorage API** - data persistence- **Auto-save to localStorage** - data persists on reload```js

## Installation and Running- **Month closing** - lock completed monthsexport default defineConfig([

````bash- Modern gradient design with dark theme globalIgnores(['dist']),

# Install dependencies

npm install- Smooth animations and micro-interactions {



# Run development server- Fully responsive interface files: ['**/*.{ts,tsx}'],

npm run dev

  extends: [

# Build for production

npm run build## Technologies // Other configs...



# Preview production build- **React 18** - UI library // Remove tseslint.configs.recommended and replace with this

npm run preview

```- **TypeScript 5** - type safety tseslint.configs.recommendedTypeChecked,



## Project Structure- **Vite 7** - fast build tool // Alternatively, use this for stricter rules



```text- **React Icons** - professional icon library tseslint.configs.strictTypeChecked,

expenses-tracker/

├── src/- **CSS3** - advanced animations and effects // Optionally, add this for stylistic rules

│   ├── components/

│   │   ├── ConfirmModal.tsx           # Confirmation dialog- **LocalStorage API** - data persistence tseslint.configs.stylisticTypeChecked,

│   │   ├── EditTransactionModal.tsx   # Edit transaction form

│   │   ├── Header.tsx                 # Stats display## Installation and Running // Other configs...

│   │   ├── InitialSetupModal.tsx      # First launch setup

│   │   ├── Modal.tsx                  # Base modal wrapper    ],

│   │   ├── SideBar.tsx                # Month navigation

│   │   ├── Subscriptions.tsx          # Subscription tracker```bash languageOptions: {

│   │   ├── TransactionForm.tsx        # Add transaction forms

│   │   ├── TransactionItem.tsx        # Transaction display# Install dependencies      parserOptions: {

│   │   └── TransactionList.tsx        # List with filters

│   ├── types/npm install        project: ['./tsconfig.node.json', './tsconfig.app.json'],

│   │   └── types.ts                   # TypeScript types

│   ├── utils/        tsconfigRootDir: import.meta.dirname,

│   │   ├── calculations.ts            # Financial calculations

│   │   └── localStorage.ts            # Storage utilities# Run development server      },

│   ├── App.tsx                        # Main component

│   ├── App.css                        # Application stylesnpm run dev      // other options...

│   ├── main.tsx                       # Entry point

│   └── index.css                      # Global styles    },

├── public/                            # Static files

├── package.json                       # Dependencies# Build for production  },

├── vite.config.ts                     # Vite configuration

└── tsconfig.json                      # TypeScript configurationnpm run build])

````

``````

## What I Learned

# Preview production build

### TypeScript

npm run previewYou can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

- Complex type definitions: `Transaction`, `Month`, `MonthData`

- Union types: `type: "income" | "expense"`````

- Enum-like types: `IncomeCategory`, `ExpensesCategory`

- Interface composition and reuse```js

- Type guards and narrowing

- Generic types with `Omit<T, K>`## Project Structure// eslint.config.js

- Optional properties with `?`

import reactX from 'eslint-plugin-react-x'

### React Hooks

```textimport reactDom from 'eslint-plugin-react-dom'

- `useState` - complex state management

- `useEffect` - data synchronization with localStorageexpenses-tracker/

- `useMemo` - performance optimization for calculations

- Controlled components for forms├── src/export default defineConfig([

- Multiple state updates in one function

- Functional state updates for immutability│   ├── components/  globalIgnores(['dist']),



### Data Management│   │   ├── ConfirmModal.tsx           # Confirmation dialog  {



- **localStorage** - complete app state persistence│   │   ├── EditTransactionModal.tsx   # Edit transaction form    files: ['**/*.{ts,tsx}'],

- Nested data structures (months → transactions)

- CRUD operations (Create, Read, Update, Delete)│   │   ├── Header.tsx                 # Stats display    extends: [

- Data filtering and sorting

- Financial calculations (totals, balances)│   │   ├── InitialSetupModal.tsx      # First launch setup      // Other configs...

- Month status management (open/closed)

│   │   ├── Modal.tsx                  # Base modal wrapper      // Enable lint rules for React

### CSS Advanced Techniques

│   │   ├── SideBar.tsx                # Month navigation      reactX.configs['recommended-typescript'],

- CSS Variables (`:root`) for theming

- Keyframe animations (`fadeIn`, `slideIn`, `spin`)│   │   ├── Subscriptions.tsx          # Subscription tracker      // Enable lint rules for React DOM

- Backdrop filter effects

- Custom scrollbars│   │   ├── TransactionForm.tsx        # Add transaction forms      reactDom.configs.recommended,

- Sticky positioning

- Smooth scroll behavior│   │   ├── TransactionItem.tsx        # Transaction display    ],

- Micro-interactions and hover effects

- Gradient backgrounds│   │   └── TransactionList.tsx        # List with filters    languageOptions: {

- Box shadows for depth

- Loading states with spinners│   ├── types/      parserOptions: {



### Component Architecture│   │   └── types.ts                   # TypeScript types        project: ['./tsconfig.node.json', './tsconfig.app.json'],



- Modal system with reusable wrapper│   ├── utils/        tsconfigRootDir: import.meta.dirname,

- Form validation and error handling

- Conditional rendering patterns│   │   ├── calculations.ts            # Financial calculations      },

- Props drilling and callbacks

- Component composition│   │   └── localStorage.ts            # Storage utilities      // other options...

- Empty states design

│   ├── App.tsx                        # Main component    },

## Main Components

│   ├── App.css                        # Application styles  },

### App.tsx

│   ├── main.tsx                       # Entry point])

Main component with application logic:

│   └── index.css                      # Global styles```

- Month management

- Transaction CRUD operations├── public/                            # Static files

- Modal state control├── package.json                       # Dependencies

- Data persistence├── vite.config.ts                     # Vite configuration

- Initial setup flow└── tsconfig.json                      # TypeScript configuration

``````

### Header.tsx

## What I Learned

Statistics display with real-time calculations:

### TypeScript

- Total income (green)

- Total expenses (red)- Complex type definitions: `Transaction`, `Month`, `MonthData`

- Balance (blue)- Union types: `type: "income" | "expense"`

- Enum-like types: `IncomeCategory`, `ExpensesCategory`

### SideBar.tsx- Interface composition and reuse

- Type guards and narrowing

Month navigation sidebar:- Generic types with `Omit<T, K>`

- Optional properties with `?`

- Active month indicator

- Add new month button### React Hooks

- Close month functionality

- Month list with icons- `useState` - complex state management

- `useEffect` - data synchronization with localStorage

### TransactionForm.tsx- `useMemo` - performance optimization for calculations

- Controlled components for forms

Dual form system:- Multiple state updates in one function

- Functional state updates for immutability

- Income form (green theme)

- Expense form (red theme)### Data Management

- Category selection

- Date picker- **localStorage** - complete app state persistence

- Amount validation- Nested data structures (months → transactions)

- CRUD operations (Create, Read, Update, Delete)

### TransactionList.tsx- Data filtering and sorting

- Financial calculations (totals, balances)

Transaction display with filtering:- Month status management (open/closed)

- Type filter (All/Income/Expense)### CSS Advanced Techniques

- Category filter

- Empty state with helpful messages- CSS Variables (`:root`) for theming

- Transaction cards with actions- Keyframe animations (`fadeIn`, `slideIn`, `spin`)

- Backdrop filter effects

### Subscriptions.tsx- Custom scrollbars

- Sticky positioning

Recurring payment tracker:- Smooth scroll behavior

- Micro-interactions and hover effects

- Filter subscription transactions- Gradient backgrounds

- Total calculation- Box shadows for depth

- Monthly recurring indicator- Loading states with spinners

## Implementation Features### Component Architecture

1. **Multi-month support**: Separate tracking for different months- Modal system with reusable wrapper

2. **Auto-save**: All changes automatically saved to localStorage- Form validation and error handling

3. **Validation**: Amount and date validation before saving- Conditional rendering patterns

4. **Filters**: Multiple filter combinations (type + category)- Props drilling and callbacks

5. **Loading states**: Visual feedback for all async operations- Component composition

6. **Empty states**: Helpful messages when no data- Empty states design

7. **Animations**: Smooth entrance and interaction animations

8. **Responsive**: Works on mobile, tablet, and desktop## Main Components

9. **Dark theme**: Eye-friendly dark color scheme

10. **Accessibility**: Proper focus states and keyboard navigation### App.tsx

## Financial CalculationsMain component with application logic

````typescript- Month management

// Total Income- Transaction CRUD operations

const totalIncome = transactions- Modal state control

  .filter(t => t.type === "income")- Data persistence

  .reduce((sum, t) => sum + t.amount, 0);- Initial setup flow



// Total Expenses### Header.tsx

const totalExpenses = transactions

  .filter(t => t.type === "expense")Statistics display with real-time calculations:

  .reduce((sum, t) => sum + t.amount, 0);

```typescript

// Balance- Total income (green)

const balance = totalIncome - totalExpenses;- Total expenses (red)

- Balance (blue)

// Subscriptions```

const subscriptions = transactions.filter(

  t => t.type === "expense" && t.category === "Subscriptions"### SideBar.tsx

);

```Month navigation sidebar:



## CSS Features- Active month indicator

- Add new month button

### Animations- Close month functionality

- Month list with icons

- `fadeIn` - smooth element appearance

- `fadeInScale` - modal entrance effect### TransactionForm.tsx

- `slideInRight` - sidebar month items

- `slideInLeft` - sidebar entranceDual form system:

- `spin` - loading spinners

- `pulse` - empty state icons- Income form (green theme)

- Expense form (red theme)

### Color System- Category selection

- Date picker

```css- Amount validation

--bg-primary: #0f0f0f      /* Main background */

--bg-secondary: #1a1a1a    /* Cards */### TransactionList.tsx

--bg-tertiary: #2d2d2d     /* Inputs */

--income: #10b981          /* Green */Transaction display with filtering:

--expense: #ef4444         /* Red */

--accent: #8b5cf6          /* Purple */- Type filter (All/Income/Expense)

```- Category filter

- Empty state with helpful messages

### Micro-interactions- Transaction cards with actions



- Ripple effects on buttons### Subscriptions.tsx

- Color bars on hover

- Scale transformationsRecurring payment tracker:

- Smooth shadows

- Active state feedback- Filter subscription transactions

- Total calculation

## Usage Example- Monthly recurring indicator



1. **First Launch**: Set your starting balance## Implementation Features

2. **Add Month**: Create a month (e.g., "February 2026")

3. **Add Income**: Enter salary or other income1. **Multi-month support**: Separate tracking for different months

4. **Add Expense**: Track your spending2. **Auto-save**: All changes automatically saved to localStorage

5. **View Stats**: Check balance in header3. **Validation**: Amount and date validation before saving

6. **Filter**: Use filters to analyze spending4. **Filters**: Multiple filter combinations (type + category)

7. **Edit/Delete**: Modify or remove transactions5. **Loading states**: Visual feedback for all async operations

8. **Close Month**: Lock the month when done6. **Empty states**: Helpful messages when no data

7. **Animations**: Smooth entrance and interaction animations

## Categories8. **Responsive**: Works on mobile, tablet, and desktop

9. **Dark theme**: Eye-friendly dark color scheme

### Income Categories10. **Accessibility**: Proper focus states and keyboard navigation



- Salary## Financial Calculations

- Freelance

- Business```typescript

- Investments// Total Income

- Giftsconst totalIncome = transactions

- Other  .filter((t) => t.type === "income")

  .reduce((sum, t) => sum + t.amount, 0);

### Expense Categories

// Total Expenses

- Foodconst totalExpenses = transactions

- Transport  .filter((t) => t.type === "expense")

- Housing  .reduce((sum, t) => sum + t.amount, 0);

- Entertainment

- Healthcare// Balance

- Educationconst balance = totalIncome - totalExpenses;

- Subscriptions

- Other// Subscriptions

const subscriptions = transactions.filter(

## Commits  (t) => t.type === "expense" && t.category === "Subscriptions",

);

```bash```

git commit -m "feat: add comprehensive expense tracker with animations and UX improvements"

```## CSS Features



## Design Highlights### Animations



- **Purple gradient header** with real-time stats- `fadeIn` - smooth element appearance

- **Dual-form layout** for income/expenses- `fadeInScale` - modal entrance effect

- **Color-coded transactions** (green/red indicators)- `slideInRight` - sidebar month items

- **Sticky filters** for easy access while scrolling- `slideInLeft` - sidebar entrance

- **Professional icons** from react-icons library- `spin` - loading spinners

- **Loading states** with animated spinners- `pulse` - empty state icons

- **Empty states** with helpful illustrations

- **Smooth animations** on all interactions### Color System



## Performance Optimizations```css

--bg-primary: #0f0f0f /* Main background */ --bg-secondary: #1a1a1a /* Cards */

- `useMemo` for expensive calculations  --bg-tertiary: #2d2d2d /* Inputs */ --income: #10b981 /* Green */

- Lazy state initialization  --expense: #ef4444 /* Red */ --accent: #8b5cf6 /* Purple */;

- Efficient array filtering```

- Debounced localStorage writes

- Optimized re-renders### Micro-interactions



## Browser Support- Ripple effects on buttons

- Color bars on hover

- Chrome/Edge (latest)- Scale transformations

- Firefox (latest)- Smooth shadows

- Safari (latest)- Active state feedback

- Mobile browsers

## Usage Example

## Future Enhancements

1. **First Launch**: Set your starting balance

- [ ] Charts and graphs2. **Add Month**: Create a month (e.g., "February 2026")

- [ ] Export to CSV/PDF3. **Add Income**: Enter salary or other income

- [ ] Budget planning4. **Add Expense**: Track your spending

- [ ] Currency conversion5. **View Stats**: Check balance in header

- [ ] Dark/Light theme toggle6. **Filter**: Use filters to analyze spending

- [ ] Multi-language support7. **Edit/Delete**: Modify or remove transactions

- [ ] Cloud sync8. **Close Month**: Lock the month when done



---## Categories



Made with ❤️ using React + TypeScript + React Icons### Income Categories


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
````

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
