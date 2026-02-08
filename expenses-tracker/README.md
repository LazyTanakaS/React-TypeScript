# Expenses Tracker — React + TypeScript# Expenses Tracker — React + TypeScript

![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)

![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)

![Vite](https://img.shields.io/badge/Vite-7-purple?style=flat-square&logo=vite)![Vite](https://img.shields.io/badge/Vite-7-purple?style=flat-square&logo=vite)

## Overview## Overview

A comprehensive expense tracker application with beautiful design, animations, and advanced financial management features.A comprehensive expense tracker application with beautiful design, animations, and advanced financial management features.

**Goal:** Practice complex state management, CRUD operations, and multi-component architecture.**Goal:** Practice complex state management, CRUD operations, and multi-component architecture.

---

## Features## Features

- **Multi-month management** - track different months separately- **Multi-month management** - track different months separately

- **Income & Expense tracking** - separate forms with validation- **Income & Expense tracking** - separate forms with validation

- **Real-time statistics** - income, expenses, and balance display- **Real-time statistics** - income, expenses, and balance display

- **Transaction categories** - organized by type (Salary, Food, Transport, etc.)- **Transaction categories** - organized by type (Salary, Food, Transport, etc.)

- **Subscription tracking** - monitor recurring payments- **Subscription tracking** - monitor recurring payments

- **Edit & Delete** - modify or remove transactions- **Edit & Delete** - modify or remove transactions

- **Filter system** - by type and category- **Filter system** - by type and category

- **Auto-save to localStorage** - data persists on reload- **Auto-save to localStorage** - data persists on reload

- **Month closing** - lock completed months- **Month closing** - lock completed months

- **Modern gradient design** with dark theme- **Modern gradient design** with dark theme

- **Smooth animations** and micro-interactions- **Smooth animations** and micro-interactions

- **Fully responsive** interface- **Fully responsive** interface

---

## Tech Stack## Tech Stack

- React 18- React 18

- TypeScript 5

- Vite 7- React 18

- React Icons- TypeScript 5

- CSS3 (animations, gradients)- Vite 7

- LocalStorage API- React Icons

- CSS3 (animations, gradients)

---- LocalStorage API

## Installation & Running---

````bash## Installation & Running

# Install dependencies

npm install```bash

# Install dependencies

# Run development servernpm install

npm run dev

# Run development server

# Build for productionnpm run dev

npm run build

# Build for production

# Preview production buildnpm run build

npm run preview```

````

---

---

## Project Structure

## Project Structure

``````text

```textexpenses-tracker/

expenses-tracker/├── src/

├── src/│   ├── components/

│   ├── components/│   │   ├── ConfirmModal.tsx           # Confirmation dialog

│   │   ├── ConfirmModal.tsx           # Confirmation dialog│   │   ├── EditTransactionModal.tsx   # Edit transaction form

│   │   ├── EditTransactionModal.tsx   # Edit transaction form│   │   ├── Header.tsx                 # Stats display

│   │   ├── Header.tsx                 # Stats display│   │   ├── InitialSetupModal.tsx      # First launch setup

│   │   ├── InitialSetupModal.tsx      # First launch setup│   │   ├── Modal.tsx                  # Base modal wrapper

│   │   ├── Modal.tsx                  # Base modal wrapper│   │   ├── SideBar.tsx                # Month navigation

│   │   ├── SideBar.tsx                # Month navigation│   │   ├── Subscriptions.tsx          # Subscription tracker

│   │   ├── Subscriptions.tsx          # Subscription tracker

│   │   ├── TransactionForm.tsx        # Add transaction forms│   │   ├── TransactionForm.tsx        # Add transaction forms# Install dependencies

│   │   ├── TransactionItem.tsx        # Transaction display

│   │   └── TransactionList.tsx        # List with filters│   │   ├── TransactionItem.tsx        # Transaction display

│   ├── types/

│   │   └── types.ts                   # TypeScript types│   │   └── TransactionList.tsx        # List with filtersnpm install- **Vite 7** - fast build tool

│   ├── utils/

│   │   ├── calculations.ts            # Financial calculations│   ├── types/

│   │   └── localStorage.ts            # Storage utilities

│   ├── App.tsx                        # Main component│   │   └── types.ts                   # TypeScript types

│   ├── App.css                        # Application styles

│   ├── main.tsx                       # Entry point│   ├── utils/

│   └── index.css                      # Global styles

├── public/│   │   ├── calculations.ts            # Financial calculations# Run development server- **React Icons** - professional icon library- **Filter system** - by type and category

├── package.json

├── vite.config.ts│   │   └── localStorage.ts            # Storage utilities

└── tsconfig.json

```│   ├── App.tsx                        # Main componentnpm run dev



---│   ├── App.css                        # Application styles



## What I Learned│   ├── main.tsx                       # Entry point- **CSS3** - advanced animations and effects



### TypeScript│   └── index.css                      # Global styles



- Complex type definitions: `Transaction`, `Month`, `MonthData`├── public/# Build for production

- Union types: `type: "income" | "expense"`

- Enum-like types: `IncomeCategory`, `ExpensesCategory`├── package.json

- Interface composition and reuse

- Type guards and narrowing├── vite.config.tsnpm run build- **LocalStorage API** - data persistence- **Auto-save to localStorage** - data persists on reload```js

- Generic types with `Omit<T, K>`

- Optional properties with `?`└── tsconfig.json



### React Hooks`````



- `useState` - complex state management---## Installation and Running- **Month closing** - lock completed monthsexport default defineConfig([

- `useEffect` - data synchronization with localStorage

- `useMemo` - performance optimization for calculations## What I Learned---

- Controlled components for forms

- Multiple state updates in one function**TypeScript:**````bash- Modern gradient design with dark theme globalIgnores(['dist']),

- Functional state updates for immutability

- Complex type definitions: `Transaction`, `Month`, `MonthData`

### Data Management

- Union types: `type: "income" | "expense"`## Project Structure

- localStorage - complete app state persistence

- Nested data structures (months → transactions)- Enum-like types: `IncomeCategory`, `ExpensesCategory`

- CRUD operations (Create, Read, Update, Delete)

- Data filtering and sorting- Interface composition and reuse# Install dependencies

- Financial calculations (totals, balances)

- Month status management (open/closed)- Type guards and narrowing



### CSS Advanced Techniques- Generic types with `Omit<T, K>````text



- CSS Variables (`:root`) for theming- Optional properties with `?`

- Keyframe animations (`fadeIn`, `slideIn`, `spin`)

- Backdrop filter effectsexpenses-tracker/npm install- Smooth animations and micro-interactions {

- Custom scrollbars

- Sticky positioning**React Hooks:**

- Smooth scroll behavior

- Micro-interactions and hover effects- `useState` — complex state management├── src/

- Gradient backgrounds

- Box shadows for depth- `useEffect` — data synchronization with localStorage

- Loading states with spinners

- `useMemo` — performance optimization for calculations│ ├── components/

### Component Architecture

- Controlled components for forms

- Modal system with reusable wrapper

- Form validation and error handling- Multiple state updates in one function│ │ ├── ConfirmModal.tsx # Confirmation dialog

- Conditional rendering patterns

- Props drilling and callbacks- Functional state updates for immutability

- Component composition

- Empty states design│ │ ├── EditTransactionModal.tsx # Edit transaction form# Run development server- Fully responsive interface files: ['**/*.{ts,tsx}'],



---**Data Management:**



## Key Components- localStorage — complete app state persistence│ │ ├── Header.tsx # Stats display



### App.tsx- Nested data structures (months → transactions)



Main component with:- CRUD operations (Create, Read, Update, Delete)│ │ ├── InitialSetupModal.tsx # First launch setupnpm run dev

- Month management

- Transaction CRUD operations- Data filtering and sorting

- Modal state control

- Data persistence- Financial calculations (totals, balances)│ │ ├── Modal.tsx # Base modal wrapper

- Initial setup flow

- Month status management (open/closed)

### Header.tsx

│ │ ├── SideBar.tsx # Month navigation extends: [

Statistics display:

- Total income (green)**CSS Advanced:**

- Total expenses (red)

- Balance (blue)- CSS Variables (`:root`) for theming│ │ ├── Subscriptions.tsx # Subscription tracker



### SideBar.tsx- Keyframe animations (`fadeIn`, `slideIn`, `spin`)



Month navigation:- Backdrop filter effects│ │ ├── TransactionForm.tsx # Add transaction forms# Build for production

- Active month indicator

- Add new month button- Custom scrollbars

- Close month functionality

- Month list with icons- Sticky positioning│ │ ├── TransactionItem.tsx # Transaction display



### TransactionForm.tsx- Smooth scroll behavior



Dual form system:- Micro-interactions and hover effects│ │ └── TransactionList.tsx # List with filtersnpm run build## Technologies // Other configs...

- Income form (green theme)

- Expense form (red theme)- Gradient backgrounds

- Category selection

- Date picker- Box shadows for depth│ ├── types/

- Amount validation

- Loading states with spinners

### TransactionList.tsx

│ │ └── types.ts # TypeScript types

Transaction display:

- Type filter (All/Income/Expense)**Component Architecture:**

- Category filter

