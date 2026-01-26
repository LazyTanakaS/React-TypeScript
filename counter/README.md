# Counter App

A simple counter application built with React + TypeScript + Vite.

## Features

- Increment counter by +1 and +5
- Decrement counter by -1 and -5
- Reset counter to zero
- Modern gradient design
- Smooth animations on interaction

## Technologies

- React 18
- TypeScript
- Vite
- CSS3 (gradients, animations)

## Installation and Running

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

counter/
├── src/
│   ├── App.tsx          # Main component
│   ├── App.css          # Styles
│   ├── Button.tsx       # Button component
│   └── main.tsx         # Entry point
└── package.json

## What I Learned

### TypeScript Fundamentals
- Type inference with `useState`
- Explicit typing: `useState<number>(0)`
- Interface for component props
- Optional props with `?`
- Function typing: `onClick?: () => void`
- Parameter typing: `amount: number`

### React Patterns
- Functional updates: `setCount((prev) => prev + 1)`
- Reusable functions with parameters
- Component composition with typed props
- Props destructuring in TypeScript

### Component Architecture
- Created reusable `Button` component
- Props interface: `ButtonProps`
- className prop for flexible styling