# ⚡ Counter App

A modern counter application with beautiful design, animations, and data persistence.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)

## ✨ Features

- ➕ Increment counter by +1 and +5
- ➖ Decrement counter by -1 and -5
- 🔄 Reset counter to zero
- 💾 **Auto-save to localStorage** (data persists on reload)
- 📜 **Action history** (last 5 operations)
- 🔒 Value limit from 0 to 100
- 🎨 Modern gradient design
- ✨ Smooth interaction animations
- 📱 Responsive interface

## 🚀 Technologies

- **React 18** - UI library
- **TypeScript 5** - type safety
- **Vite 7** - fast build tool
- **CSS3** - gradients and animations
- **LocalStorage API** - data persistence

## 📦 Installation and Running

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

## 📂 Project Structure

```text
counter/
├── src/
│   ├── App.tsx          # Main component
│   ├── App.css          # Application styles
│   ├── Button.tsx       # Button component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static files
├── package.json         # Dependencies
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

## 🎓 What I Learned

### TypeScript

- ✅ Typing `useState<number>()`
- ✅ Interfaces for props: `interface ButtonProps`
- ✅ Optional parameters: `onClick?: () => void`
- ✅ Function typing: `(amount: number) => void`
- ✅ Object typing: `HistoryEntry`
- ✅ localStorage typing

### React Hooks

- ✅ `useState` - state management
- ✅ `useEffect` - side effects and synchronization
- ✅ Lazy initialization in useState
- ✅ Functional state updates: `setCount(prev => prev + 1)`
- ✅ Dependencies array in useEffect

### Data Management

- ✅ **localStorage** - saving and loading data
- ✅ JSON serialization/deserialization
- ✅ Action history management
- ✅ Value range constraints (0-100)

### CSS

- ✅ CSS gradients `linear-gradient()`
- ✅ CSS animations `@keyframes`
- ✅ Transitions for smoothness
- ✅ Box-shadow for depth
- ✅ Hover effects
- ✅ Custom scrollbar

## 🎯 Main Components

### App.tsx

Main component with logic:

- Counter state management
- localStorage persistence
- Action history
- Event handling

### Button.tsx

Reusable button component:

```typescript
interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}
```

## 🔥 Implementation Features

1. **Auto-save**: Counter automatically saves to localStorage on every change
2. **History**: Tracks last 5 actions with timestamps
3. **Safety**: Value constraints in the 0-100 range
4. **Performance**: Uses functional state updates
5. **UX**: Smooth animations for history entries

## 📝 Commits

```bash
git commit -m "feat: add counter with localStorage persistence and history"
```

## 🎨 Design

- Purple gradients for main elements
- Colorful buttons for better visualization
- slideIn animation for history
- Responsive hover effects

## 📸 Screenshots

The app includes:

- Large counter display with gradient
- 5 control buttons (+5, +1, Reset, -1, -5)
- History block with timestamps
- Green indicator for last action

---

**Made with ❤️ and TypeScript**
