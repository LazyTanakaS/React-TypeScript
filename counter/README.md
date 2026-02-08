# Counter App — React + TypeScript# Counter App

![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)A modern counter application with beautiful design, animations, and data persistence.

![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)

![Vite](https://img.shields.io/badge/Vite-7-purple?style=flat-square&logo=vite)![React](https://img.shields.io/badge/React-18-blue?logo=react)

![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)

## Overview![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)

A modern counter application with beautiful design, animations, and data persistence.## Features

**Goal:** Practice React fundamentals, TypeScript typing, and localStorage integration.- Increment counter by +1 and +5

- Decrement counter by -1 and -5

---- Reset counter to zero

- **Auto-save to localStorage** (data persists on reload)

## Features- **Action history** (last 5 operations)

- Value limit from 0 to 100

- Increment/Decrement by +1 and +5- Modern gradient design

- Reset counter to zero- Smooth interaction animations

- Auto-save to localStorage- Responsive interface

- Action history (last 5 operations)

- Value limit from 0 to 100## Technologies

- Modern gradient design

- Smooth animations- **React 18** - UI library

- **TypeScript 5** - type safety

---- **Vite 7** - fast build tool

- **CSS3** - gradients and animations

## Tech Stack- **LocalStorage API** - data persistence

- React 18## Installation and Running

- TypeScript 5

- Vite 7```bash

- CSS3 (gradients, animations)# Install dependencies

- LocalStorage APInpm install

---# Run development server

npm run dev

## Installation & Running

# Build for production

````bashnpm run build

# Install dependencies

npm install# Preview production build

npm run preview

# Run development server```

npm run dev

## Project Structure

# Build for production

npm run build```text

```counter/

├── src/

---│   ├── App.tsx          # Main component

│   ├── App.css          # Application styles

## Project Structure│   ├── Button.tsx       # Button component

│   ├── main.tsx         # Entry point

```text│   └── index.css        # Global styles

counter/├── public/              # Static files

├── src/├── package.json         # Dependencies

│   ├── App.tsx          # Main component├── vite.config.ts       # Vite configuration

│   ├── App.css          # Styles└── tsconfig.json        # TypeScript configuration

│   ├── Button.tsx       # Button component```

│   ├── main.tsx         # Entry point

│   └── index.css        # Global styles## What I Learned

├── public/

├── package.json### TypeScript

├── vite.config.ts

└── tsconfig.json- Typing `useState<number>()`

```- Interfaces for props: `interface ButtonProps`

- Optional parameters: `onClick?: () => void`

---- Function typing: `(amount: number) => void`

- Object typing: `HistoryEntry`

## What I Learned- localStorage typing



**TypeScript:**### React Hooks

- Typing useState: `useState<number>()`

- Interface for props: `interface ButtonProps`- `useState` - state management

- Optional parameters: `onClick?: () => void`- `useEffect` - side effects and synchronization

- Function typing: `(amount: number) => void`- Lazy initialization in useState

- Functional state updates: `setCount(prev => prev + 1)`

**React Hooks:**- Dependencies array in useEffect

- `useState` — state management

- `useEffect` — localStorage sync### Data Management

- Lazy initialization

- Functional state updates- **localStorage** - saving and loading data

- JSON serialization/deserialization

**Data Management:**- Action history management

- localStorage persistence- Value range constraints (0-100)

- JSON serialization

- Action history tracking### CSS

- Value range constraints

- CSS gradients `linear-gradient()`

---- CSS animations `@keyframes`

- Transitions for smoothness

## Key Components- Box-shadow for depth

- Hover effects

### App.tsx- Custom scrollbar



Main component with:## Main Components

- Counter state management

- localStorage persistence### App.tsx

- Action history

- Event handlingMain component with logic:



### Button.tsx- Counter state management

- localStorage persistence

Reusable button component:- Action history

- Event handling

```typescript

interface ButtonProps {### Button.tsx

  label: string;

  onClick?: () => void;Reusable button component:

  className?: string;

}```typescript

```interface ButtonProps {

  label: string;

---  onClick?: () => void;

  className?: string;

## Author}

````

Made with ❤️ using React + TypeScript

## Implementation Features

1. **Auto-save**: Counter automatically saves to localStorage on every change
2. **History**: Tracks last 5 actions with timestamps
3. **Safety**: Value constraints in the 0-100 range
4. **Performance**: Uses functional state updates
5. **UX**: Smooth animations for history entries

## Commits

```bash
git commit -m "feat: add counter with localStorage persistence and history"
```

## Design

- Purple gradients for main elements
- Colorful buttons for better visualization
- slideIn animation for history
- Responsive hover effects

## Screenshots

The app includes:

- Large counter display with gradient
- 5 control buttons (+5, +1, Reset, -1, -5)
- History block with timestamps
- Green indicator for last action

---

Made with ❤️ using React + TypeScript
