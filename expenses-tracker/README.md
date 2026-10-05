# Expenses Tracker App — React + TypeScript

![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7-purple?style=flat-square&logo=vite)

## Overview

A comprehensive personal finance tracker with monthly budgeting, transaction management, and subscription tracking.

**Goal:** Practice complex state management, modal workflows, and localStorage integration with multiple data entities.

---

## Features

- 💰 **Initial balance setup** wizard
- 📊 **Monthly budgeting** with separate month management
- ➕ **Add income and expenses** with categories
- ✏️ **Edit transactions** with modal interface
- ❌ **Delete transactions** with confirmation
- 🔒 **Close months** to prevent editing past periods
- 📅 **Monthly navigation** via sidebar
- 💳 **Subscription tracking** for recurring expenses
- 📈 **Real-time balance calculation** (income - expenses)
- 💾 **Auto-save to localStorage** (data persists on reload)
- 🎨 **Modern gradient design**
- ✨ **Smooth animations** and modal interactions
- 📱 **Responsive interface**

---

## Technologies

- **React 18** - UI library
- **TypeScript 5** - type safety
- **Vite 7** - fast build tool
- **CSS3** - gradients, shadows, and animations
- **LocalStorage API** - data persistence
- **Crypto API** - UUID generation for IDs

---

## Installation and Running

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Testing

Unit tests for components, written with **Vitest 4**, **React Testing Library 16**, **user-event 14** and **jest-dom 7** (environment: **jsdom 30**).

```bash
# run from the expenses-tracker folder
npx vitest run
```

### Coverage

| Component       | Tests | What is checked                                                                                |
| --------------- | ----- | ---------------------------------------------------------------------------------------------- |
| ConfirmModal    | 3     | Displays confirmation content, handles cancel, and applies the danger style.                   |
| TransactionForm | 4     | Submits income and expense data; rejects negative and empty income amounts.                    |
| TransactionItem | 2     | Renders income details with formatted amount/date and calls the edit callback.                 |
| TransactionList | 8     | Renders empty and populated lists; applies type/category filters; calls edit/delete callbacks. |

17 tests in total.

### How the tests are verified

I manually mutated the combined type/category filter condition in `TransactionList` and the danger-style condition in `ConfirmModal`; the relevant suites caught each mutation (4 of 8 and 1 of 3 tests failed, respectively). After restoring both conditions, all 17 tests passed.

### CI

On pushes to `main` and manual workflow dispatches, GitHub Actions installs dependencies, runs `npx vitest run` and `npm run build` for `expenses-tracker`, and builds the other apps. The deploy job depends on the build job, so a failing test or build prevents deployment to GitHub Pages.

---

## Project Structure

```text
expenses-tracker/
├── src/
│   ├── App.tsx                      # Main component with logic
│   ├── App.css                      # Application styles
│   ├── main.tsx                     # Entry point
│   ├── index.css                    # Global styles
│   ├── components/
│   │   ├── Header.tsx               # Header with stats display
│   │   ├── SideBar.tsx              # Month navigation sidebar
│   │   ├── TransactionForm.tsx      # Form to add transactions
│   │   ├── TransactionList.tsx      # List of all transactions
│   │   ├── TransactionItem.tsx      # Single transaction item
│   │   ├── EditTransactionModal.tsx # Modal for editing
│   │   ├── ConfirmModal.tsx         # Confirmation dialog
│   │   ├── InitialSetupModal.tsx    # First-time setup wizard
│   │   ├── Subscriptions.tsx        # Subscription tracker
│   │   └── Modal.tsx                # Base modal component
│   ├── types/
│   │   └── types.ts                 # TypeScript type definitions
│   ├── utils/
│   │   ├── calculations.ts          # Balance calculations
│   │   └── localStorage.ts          # Data persistence logic
│   └── styles/                      # Additional styles
├── public/                          # Static files
├── package.json                     # Dependencies
├── vite.config.ts                   # Vite configuration
└── tsconfig.json                    # TypeScript configuration
```

---

## What I Learned

### TypeScript

- Complex type definitions: `Transaction`, `Month`
- Type unions: `type: "income" | "expense"`
- String literal types: `ExpensesCategory`, `IncomeCategory`
- Optional properties: `closedAt?: string`
- Type exports and imports: `import type { Month, Transaction }`
- Omit utility type: `Omit<Transaction, "id">`
- Function typing with complex parameters
- Props interfaces for multiple components

### React Hooks

- `useState` - managing months, transactions, modals, and active month
- `useEffect` - syncing with localStorage on data changes
- Lazy initialization with functions in useState
- Functional state updates with `map()` and `filter()`
- Multiple useEffect hooks for different concerns
- Dependencies array optimization

### Component Architecture

- **Component composition** - breaking down complex UI
- **Modal patterns** - reusable modal wrapper component
- **Prop drilling** vs. **callback props**
- **Controlled components** - forms and inputs
- **Conditional rendering** - showing/hiding modals
- **Component isolation** - separating concerns

### Data Management

- **localStorage** - saving and loading complex data structures
- **JSON serialization/deserialization** for objects
- **UUID generation** with crypto.randomUUID()
- **Immutable updates** - spreading objects and arrays
- **Derived state** - calculating stats from transactions
- **Multi-entity relationships** - months containing transactions
- **Data validation** - checking setup completion

### State Management Patterns

- **Lifting state up** - managing state at App level
- **State updates** - immutably updating nested data
- **Array transformations** - map, filter for state updates
- **State initialization** - loading from localStorage on mount
- **Boolean flags** - for modal visibility and closed months

### Business Logic

- **Month lifecycle** - creation, usage, and closing
- **Transaction CRUD** - Create, Read, Update, Delete
- **Balance calculation** - start balance + income - expenses
- **Date handling** - storing and displaying dates
- **Categories** - predefined and custom categories
- **Initial setup flow** - wizard pattern

### CSS

- CSS gradients `linear-gradient()`
- Flexbox layouts for responsive design
- CSS Grid for component layout
- Modal overlay with backdrop-filter
- Transitions for smooth interactions
- Hover effects for buttons and items
- Box-shadow for depth and elevation
- Custom scrollbar styling
- Responsive design with media queries

---

## Main Components

### App.tsx

Main application component with:

- Month state management (array of months)
- Active month tracking
- Transaction CRUD operations
- Modal state management
- localStorage synchronization
- Initial setup flow control

### Header.tsx

Displays financial overview:

- Current month name
- Total income (green)
- Total expenses (red)
- Current balance
- Month management buttons

### SideBar.tsx

Navigation component:

- List of all months
- Active month highlighting
- Create new month button
- Month switching functionality
- Visual indicators for closed months

### TransactionForm.tsx

Form for adding transactions:

```typescript
- Type selection (income/expense)
- Amount input with validation
- Category dropdown
- Custom category input
- Description field
- Date picker
- Form validation
```

### TransactionList.tsx

Lists all transactions:

- Grouped display of transactions
- Income items (green indicators)
- Expense items (red indicators)
- Empty state message
- Action buttons (edit/delete)

### Modal Components

**InitialSetupModal**: First-time setup wizard for initial balance

**EditTransactionModal**: Edit existing transaction with pre-filled data

**ConfirmModal**: Confirmation dialog for destructive actions

**Modal**: Base reusable modal wrapper with backdrop

---

## Implementation Features

1. **Multi-Month System**: Create and manage separate months with independent budgets
2. **Month Closing**: Lock past months to prevent accidental edits
3. **Smart Navigation**: Sidebar for quick month switching
4. **Data Integrity**: Immutable state updates ensure data consistency
5. **Auto-save**: All changes immediately persist to localStorage
6. **Modal Workflows**: Intuitive modal-based editing and confirmation flows
7. **Category System**: Predefined categories with custom category support
8. **Real-time Calculations**: Balance updates instantly as transactions are added
9. **Transaction Management**: Full CRUD operations with edit and delete capabilities
10. **Initial Setup**: Guided wizard for first-time users

---

## Design

- Modern gradient backgrounds (purple, blue, pink hues)
- Color-coded transactions (green for income, red for expenses)
- Clean card-based layout with shadows
- Smooth modal animations with backdrop blur
- Responsive button styles with hover effects
- Clear visual hierarchy
- Intuitive iconography
- Accessible color contrasts

---

## Screenshots

The app includes:

- **Header**: Shows current balance, income, and expenses with color coding
- **Sidebar**: Monthly navigation with visual status indicators
- **Transaction Form**: Clean input form with type toggle
- **Transaction List**: Organized list of all income and expenses
- **Modals**: Smooth overlay modals for editing and confirmations
- **Initial Setup**: Welcome wizard for first-time setup

---

## Key Features Explained

### Month Management

Each month has its own balance and transactions. You can:

- Create new months
- Switch between months
- Close months to prevent further edits
- Each month tracks its start balance

### Transaction Categories

**Income:** Salary, Side Job, Debt repayment, or custom

**Expenses:** Food, Shopping, Taxi, Fuel, Entertainment, Bills, Subscriptions, or custom

### Balance Calculation

```text
Current Balance = Start Balance + Total Income - Total Expenses
```

### Data Persistence

All data is automatically saved to localStorage:

- All months and their transactions
- Active month selection
- Setup completion status

---

## Future Improvements

- [ ] Add transaction search and filtering
- [ ] Export data to CSV/PDF
- [ ] Budget goals and alerts
- [ ] Charts and visual analytics
- [ ] Multi-currency support
- [ ] Recurring transaction templates
- [ ] Tags for better categorization
- [ ] Dark mode toggle

---

## Lessons & Takeaways

This project taught me how to:

- Manage complex nested state structures
- Build reusable modal components
- Handle multi-step user flows (setup wizard)
- Organize large React applications
- Work with multiple TypeScript types
- Implement CRUD operations properly
- Structure utility functions for calculations
- Handle localStorage for complex data

---

## License

MIT

---

Made with ❤️ using React + TypeScript
