# Todo List App# 📝 Todo List App# React + TypeScript + Vite

A beautiful todo list application with vintage design, filters, and data persistence.A beautiful todo list application with vintage design, filters, and data persistence.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

![React](https://img.shields.io/badge/React-18-blue?logo=react)![React](https://img.shields.io/badge/React-18-blue?logo=react)Currently, two official plugins are available:

![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)

![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)

## Features![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- Add new tasks- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- Mark tasks as completed

- Delete tasks## ✨ Features

- Filter tasks (All / Active / Completed)

- **Auto-save to localStorage** (data persists on reload)## React Compiler

- Vintage retro design with handwritten font

- Smooth animations and hover effects- ➕ Add new tasks

- Responsive interface

- ✅ Mark tasks as completedThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Technologies

- ❌ Delete tasks

- **React 18** - UI library

- **TypeScript 5** - type safety- 🔍 Filter tasks (All / Active / Completed)## Expanding the ESLint configuration

- **Vite 7** - fast build tool

- **CSS3** - gradients, shadows, and animations- 💾 **Auto-save to localStorage** (data persists on reload)

- **LocalStorage API** - data persistence

- **Google Fonts** - Caveat (handwritten font)- 🎨 Vintage retro design with handwritten fontIf you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

## Installation and Running- ✨ Smooth animations and hover effects

`bash- 📱 Responsive interface`js

# Install dependencies

npm installexport default defineConfig([

# Run development server## 🚀 Technologies globalIgnores(['dist']),

npm run dev

{

# Build for production

npm run build- **React 18** - UI library files: ['**/*.{ts,tsx}'],

# Preview production build- **TypeScript 5** - type safety extends: [

npm run preview

`````- **Vite 7** - fast build tool // Other configs...



## Project Structure- **CSS3** - gradients, shadows, and animations



```text- **LocalStorage API** - data persistence // Remove tseslint.configs.recommended and replace with this

todo-list/

├── src/- **Google Fonts** - Caveat (handwritten font) tseslint.configs.recommendedTypeChecked,

│   ├── App.tsx           # Main component with logic

│   ├── App.css           # Application styles      // Alternatively, use this for stricter rules

│   ├── TaskItem.tsx      # Task item component

│   ├── TaskInput.tsx     # Input field component## 📦 Installation and Running tseslint.configs.strictTypeChecked,

│   ├── FilterButtons.tsx # Filter buttons component

│   ├── main.tsx          # Entry point      // Optionally, add this for stylistic rules

│   └── index.css         # Global styles

├── public/               # Static files````bash tseslint.configs.stylisticTypeChecked,

├── package.json          # Dependencies

├── vite.config.ts        # Vite configuration# Install dependencies

└── tsconfig.json         # TypeScript configuration

```npm install      // Other configs...



## What I Learned    ],



### TypeScript# Run development server    languageOptions: {



- Type aliases: `type FilterType = "all" | "active" | "completed"`npm run dev      parserOptions: {

- Interfaces: `interface Task`, `interface TaskItemProps`

- Exporting types: `export type FilterType`        project: ['./tsconfig.node.json', './tsconfig.app.json'],

- Type-only imports: `import type { Task } from "./App"`

- Function typing: `(id: number) => void`# Build for production        tsconfigRootDir: import.meta.dirname,

- Event typing: `React.ChangeEvent<HTMLInputElement>`

npm run build      },

### React Hooks

      // other options...

- `useState` - state management for tasks, filter, input

- `useEffect` - syncing with localStorage# Preview production build    },

- Lazy initialization: loading saved tasks on mount

- Functional state updates with `map()` and `filter()`npm run preview  },

- Dependencies array in useEffect

```])

### Data Management

`````

- **localStorage** - saving and loading tasks

- JSON serialization/deserialization## 📂 Project Structure

- Array methods: `map()`, `filter()`, `find()`

- Filtering logic for different viewsYou can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

- Generating unique IDs with `Date.now()`

`````text

### Component Architecture

todo-list/```js

- Component decomposition

- Props interface typing├── src/// eslint.config.js

- Passing callbacks to child components

- Controlled inputs│   ├── App.tsx           # Main component with logicimport reactX from 'eslint-plugin-react-x'

- Conditional rendering

- Key prop for lists│   ├── App.css           # Application stylesimport reactDom from 'eslint-plugin-react-dom'



### CSS│   ├── TaskItem.tsx      # Task item component



- Google Fonts integration│   ├── TaskInput.tsx     # Input field componentexport default defineConfig([

- CSS gradients `linear-gradient()`

- Box-shadow for depth effect│   ├── FilterButtons.tsx # Filter buttons component  globalIgnores(['dist']),

- Transitions for smooth animations

- Hover effects with `transform`│   ├── main.tsx          # Entry point  {

- Pseudo-elements `::before`, `::placeholder`

- Text-decoration for completed tasks│   └── index.css         # Global styles    files: ['**/*.{ts,tsx}'],

- Accent-color for checkboxes

├── public/               # Static files    extends: [

## Main Components

├── package.json          # Dependencies      // Other configs...

### App.tsx

├── vite.config.ts        # Vite configuration      // Enable lint rules for React

Main component with state and logic:

└── tsconfig.json         # TypeScript configuration      reactX.configs['recommended-typescript'],

- Tasks array management

- Current filter state```      // Enable lint rules for React DOM

- Input value state

- CRUD operations: add, toggle, delete tasks      reactDom.configs.recommended,

- Filtering logic

- localStorage integration## 🎓 What I Learned    ],



### TaskItem.tsx    languageOptions: {



Individual task component:### TypeScript      parserOptions: {



- Checkbox for completion status        project: ['./tsconfig.node.json', './tsconfig.app.json'],

- Task text with click handler

- Delete button- ✅ Type aliases: `type FilterType = "all" | "active" | "completed"`        tsconfigRootDir: import.meta.dirname,

- Visual styling for completed tasks

- ✅ Interfaces: `interface Task`, `interface TaskItemProps`      },

### TaskInput.tsx

- ✅ Exporting types: `export type FilterType`      // other options...

Input field component:

- ✅ Type-only imports: `import type { Task } from "./App"`    },

- Controlled input

- Add button- ✅ Function typing: `(id: number) => void`  },

- Enter key support

- Input validation- ✅ Event typing: `React.ChangeEvent<HTMLInputElement>`])



### FilterButtons.tsx````



Filter buttons component:### React Hooks



- Three filter options (All / Active / Completed)- ✅ `useState` - state management for tasks, filter, input

- Active button highlighting- ✅ `useEffect` - syncing with localStorage

- Filter change handler- ✅ Lazy initialization: loading saved tasks on mount

- ✅ Functional state updates with `map()` and `filter()`

## Design Features- ✅ Dependencies array in useEffect



- Vintage paper texture effect### Data Management

- Handwritten Caveat font

- Brown/beige retro color palette- ✅ **localStorage** - saving and loading tasks

- Smooth hover animations- ✅ JSON serialization/deserialization

- 3D button effects with gradients- ✅ Array methods: `map()`, `filter()`, `find()`

- Typewriter-style interface- ✅ Filtering logic for different views

- ✅ Generating unique IDs with `Date.now()`

## Key Functions

### Component Architecture

```typescript

// Add new task- ✅ Component decomposition

const handleAddTask = () => {- ✅ Props interface typing

  const newTask: Task = {- ✅ Passing callbacks to child components

    id: Date.now(),- ✅ Controlled inputs

    text: inputValue,- ✅ Conditional rendering

    completed: false,- ✅ Key prop for lists

  };

  setTasks([...tasks, newTask]);### CSS

};

- ✅ Google Fonts integration

// Toggle task completion- ✅ CSS gradients `linear-gradient()`

const handleToggleTask = (id: number) => {- ✅ Box-shadow for depth effect

  setTasks(tasks.map((task) =>- ✅ Transitions for smooth animations

    task.id === id - ✅ Hover effects with `transform`

      ? { ...task, completed: !task.completed } - ✅ Pseudo-elements `::before`, `::placeholder`

      : task- ✅ Text-decoration for completed tasks

  ));- ✅ Accent-color for checkboxes

};

## 🎯 Main Components

// Delete task

const handleDeleteTask = (id: number) => {### App.tsx

  setTasks(tasks.filter((task) => task.id !== id));

};Main component with state and logic:



// Filter tasks- Tasks array management

const filteredTask = tasks.filter((task) => {- Current filter state

  if (filter === "all") return true;- Input value state

  if (filter === "active") return !task.completed;- CRUD operations: add, toggle, delete tasks

  if (filter === "completed") return task.completed;- Filtering logic

});- localStorage integration

```

### TaskItem.tsx

## Usage

Individual task component:

1. **Add a task**: Type text in the input field and press Enter or click "Add"

2. **Complete a task**: Click the checkbox or task text- Checkbox for completion status

3. **Delete a task**: Click the "Delete" button- Task text with click handler

4. **Filter tasks**: Use the filter buttons to show All, Active, or Completed tasks- Delete button

5. **Data persists**: All tasks are automatically saved to localStorage- Visual styling for completed tasks



## Future Improvements### TaskInput.tsx



- [ ] Edit task textInput field component:

- [ ] Task priorities

- [ ] Due dates- Controlled input

- [ ] Categories/tags- Add button

- [ ] Search functionality- Enter key support

- [ ] Dark mode- Input validation

- [ ] Drag & drop reordering

- [ ] Task statistics### FilterButtons.tsx



## LicenseFilter buttons component:



MIT License - feel free to use this project for learning!- Three filter options (All / Active / Completed)

- Active button highlighting

---- Filter change handler



Made with ❤️ using React + TypeScript## 🎨 Design Features


- 📄 Vintage paper texture effect
- 🖋️ Handwritten Caveat font
- 🎨 Brown/beige retro color palette
- ✨ Smooth hover animations
- 🔳 3D button effects with gradients
- 📝 Typewriter-style interface

## 🔧 Key Functions

```typescript
// Add new task
const handleAddTask = () => {
  const newTask: Task = {
    id: Date.now(),
    text: inputValue,
    completed: false,
  };
  setTasks([...tasks, newTask]);
};

// Toggle task completion
const handleToggleTask = (id: number) => {
  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    ),
  );
};

// Delete task
const handleDeleteTask = (id: number) => {
  setTasks(tasks.filter((task) => task.id !== id));
};

// Filter tasks
const filteredTask = tasks.filter((task) => {
  if (filter === "all") return true;
  if (filter === "active") return !task.completed;
  if (filter === "completed") return task.completed;
});
```

## 📖 Usage

1. **Add a task**: Type text in the input field and press Enter or click "Add"
2. **Complete a task**: Click the checkbox or task text
3. **Delete a task**: Click the "Delete" button
4. **Filter tasks**: Use the filter buttons to show All, Active, or Completed tasks
5. **Data persists**: All tasks are automatically saved to localStorage

## 🌟 Future Improvements

- [ ] Edit task text
- [ ] Task priorities
- [ ] Due dates
- [ ] Categories/tags
- [ ] Search functionality
- [ ] Dark mode
- [ ] Drag & drop reordering
- [ ] Task statistics

## 📄 License

MIT License - feel free to use this project for learning!

---

Made with ❤️ using React + TypeScript
`````
