# Todo List App — React + TypeScript# 📝 Todo List App# Todo List App# 📝 Todo List App# React + TypeScript + Vite

![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)A beautiful todo list application with vintage design, filters, and data persistence.A beautiful todo list application with vintage design, filters, and data persistence.A beautiful todo list application with vintage design, filters, and data persistence.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)

![Vite](https://img.shields.io/badge/Vite-7-purple?style=flat-square&logo=vite)![React](https://img.shields.io/badge/React-18-blue?logo=react)![React](https://img.shields.io/badge/React-18-blue?logo=react)![React](https://img.shields.io/badge/React-18-blue?logo=react)Currently, two official plugins are available:

## Overview![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)

A beautiful todo list application with vintage design, filters, and data persistence.![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)

**Goal:** Practice CRUD operations, filtering logic, and localStorage integration.## ✨ Features![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)

---- ➕ Add new tasks## Features![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

## Features- ✅ Mark tasks as completed

- Add, edit, and delete tasks- ❌ Delete tasks- Add new tasks- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- Mark tasks as complete

- Filter by status (All/Active/Completed)- 🔍 Filter tasks (All / Active / Completed)

- Auto-save to localStorage

- Vintage retro design- 💾 **Auto-save to localStorage** (data persists on reload)- Mark tasks as completed

- Smooth animations

- Responsive interface- 🎨 Vintage retro design with handwritten font

---- ✨ Smooth animations and hover effects- Delete tasks## ✨ Features

## Tech Stack- 📱 Responsive interface

- React 18- Filter tasks (All / Active / Completed)

- TypeScript 5

- Vite 7## 🚀 Technologies

- CSS3 (gradients, animations)

- LocalStorage API- **Auto-save to localStorage** (data persists on reload)## React Compiler

- Google Fonts (Caveat)

- **React 18** - UI library

---

- **TypeScript 5** - type safety- Vintage retro design with handwritten font

## Installation & Running

- **Vite 7** - fast build tool

```````````bash

# Install dependencies- **CSS3** - gradients, shadows, and animations- Smooth animations and hover effects- ➕ Add new tasks

npm install

- **LocalStorage API** - data persistence

# Run development server

npm run dev- **Google Fonts** - Caveat (handwritten font)- Responsive interface



# Build for production## 📦 Installation and Running- ✅ Mark tasks as completedThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

npm run build

``````````bash## Technologies



---# Install dependencies



## Project Structurenpm install- ❌ Delete tasks



```text

todo-list/

├── src/# Run development server- **React 18** - UI library

│   ├── App.tsx           # Main component

│   ├── App.css           # Stylesnpm run dev

│   ├── TaskItem.tsx      # Task component

│   ├── TaskInput.tsx     # Input component- **TypeScript 5** - type safety- 🔍 Filter tasks (All / Active / Completed)## Expanding the ESLint configuration

│   ├── FilterButtons.tsx # Filter component

│   ├── main.tsx          # Entry point# Build for production

│   └── index.css         # Global styles

├── public/npm run build- **Vite 7** - fast build tool

├── package.json

├── vite.config.ts

└── tsconfig.json

```# Preview production build- **CSS3** - gradients, shadows, and animations- 💾 **Auto-save to localStorage** (data persists on reload)



---npm run preview



## What I Learned```- **LocalStorage API** - data persistence



**TypeScript:**

- Type aliases: `type FilterType = "all" | "active" | "completed"`

- Interfaces: `interface Task`, `interface TaskItemProps`## 📂 Project Structure- **Google Fonts** - Caveat (handwritten font)- 🎨 Vintage retro design with handwritten fontIf you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- Exporting types: `export type FilterType`

- Type-only imports: `import type { Task } from "./App"`

- Event typing: `React.ChangeEvent<HTMLInputElement>`

```text## Installation and Running- ✨ Smooth animations and hover effects

**React Hooks:**

- `useState` — state management for tasks, filter, inputtodo-list/

- `useEffect` — syncing with localStorage

- Lazy initialization├── src/`bash- 📱 Responsive interface`js

- Functional state updates with `map()` and `filter()`

│   ├── App.tsx           # Main component with logic

**Data Management:**

- localStorage persistence│   ├── App.css           # Application styles# Install dependencies

- JSON serialization

- Array methods: `map()`, `filter()`, `find()`│   ├── TaskItem.tsx      # Task item component

- Filtering logic for different views

- Generating unique IDs with `Date.now()`│   ├── TaskInput.tsx     # Input field componentnpm installexport default defineConfig([



---│   ├── FilterButtons.tsx # Filter buttons component



## Key Components│   ├── main.tsx          # Entry point# Run development server## 🚀 Technologies globalIgnores(['dist']),



### App.tsx│   └── index.css         # Global styles



Main component with:├── public/               # Static filesnpm run dev

- Tasks array management

- Current filter state├── package.json          # Dependencies

- CRUD operations

- Filtering logic├── vite.config.ts        # Vite configuration{

- localStorage integration

└── tsconfig.json         # TypeScript configuration

### TaskItem.tsx

```# Build for production

Individual task component:

- Checkbox for completion

- Task text display

- Delete button## 📚 What I Learnednpm run build- **React 18** - UI library files: ['**/*.{ts,tsx}'],

- Visual styling for completed tasks



### TaskInput.tsx

### TypeScript# Preview production build- **TypeScript 5** - type safety extends: [

Input field component:

- Controlled input

- Enter key support

- Input validation- Type aliases: `type FilterType = "all" | "active" | "completed"`npm run preview



### FilterButtons.tsx- Interfaces: `interface Task`, `interface TaskItemProps`



Filter buttons component:- Exporting types: `export type FilterType``````- **Vite 7** - fast build tool // Other configs...

- Three filter options (All/Active/Completed)

- Active button highlighting- Type-only imports: `import type { Task } from "./App"`

- Filter change handler

- Function typing: `(id: number) => void`

---

- Event typing: `React.ChangeEvent<HTMLInputElement>`

## Design Features

## Project Structure- **CSS3** - gradients, shadows, and animations

- Vintage paper texture effect

- Handwritten Caveat font### React Hooks

- Brown/beige retro color palette

- Smooth hover animations

- 3D button effects with gradients

- Typewriter-style interface- `useState` - state management for tasks, filter, input



---- `useEffect` - syncing with localStorage```text- **LocalStorage API** - data persistence // Remove tseslint.configs.recommended and replace with this



## Author- Lazy initialization: loading saved tasks on mount



Made with ❤️ using React + TypeScript- Functional state updates with `map()` and `filter()`todo-list/


- Dependencies array in useEffect

├── src/- **Google Fonts** - Caveat (handwritten font) tseslint.configs.recommendedTypeChecked,

### Data Management

│   ├── App.tsx           # Main component with logic

- **localStorage** - saving and loading tasks

- JSON serialization/deserialization│   ├── App.css           # Application styles      // Alternatively, use this for stricter rules

- Array methods: `map()`, `filter()`, `find()`

- Filtering logic for different views│   ├── TaskItem.tsx      # Task item component

- Generating unique IDs with `Date.now()`

│   ├── TaskInput.tsx     # Input field component## 📦 Installation and Running tseslint.configs.strictTypeChecked,

### Component Architecture

│   ├── FilterButtons.tsx # Filter buttons component

- Component decomposition

- Props interface typing│   ├── main.tsx          # Entry point      // Optionally, add this for stylistic rules

- Passing callbacks to child components

- Controlled inputs│   └── index.css         # Global styles

- Conditional rendering

- Key prop for lists├── public/               # Static files````bash tseslint.configs.stylisticTypeChecked,



### CSS├── package.json          # Dependencies



- Google Fonts integration├── vite.config.ts        # Vite configuration# Install dependencies

- CSS gradients `linear-gradient()`

- Box-shadow for depth effect└── tsconfig.json         # TypeScript configuration

- Transitions for smooth animations

- Hover effects with `transform````npm install      // Other configs...

- Pseudo-elements `::before`, `::placeholder`

- Text-decoration for completed tasks

- Accent-color for checkboxes

## What I Learned    ],

## 🎨 Design Highlights



### Vintage Aesthetic

### TypeScript# Run development server    languageOptions: {

The app features a vintage retro design:



- **Handwritten Font**: "Caveat" from Google Fonts

- **Paper Effect**: Textured background using SVG pattern- Type aliases: `type FilterType = "all" | "active" | "completed"`npm run dev      parserOptions: {

- **Sepia Tones**: Warm brown/beige color palette

- **Classic Layout**: Centered card with shadow depth- Interfaces: `interface Task`, `interface TaskItemProps`

- **Aged Look**: Muted colors and soft shadows

- Exporting types: `export type FilterType`        project: ['./tsconfig.node.json', './tsconfig.app.json'],

### Color Palette

- Type-only imports: `import type { Task } from "./App"`

```css

--cream: #fef6e4;           /* Background */- Function typing: `(id: number) => void`# Build for production        tsconfigRootDir: import.meta.dirname,

--paper: #fffaf0;           /* Card background */

--ink: #3d3522;             /* Text color */- Event typing: `React.ChangeEvent<HTMLInputElement>`

--accent-brown: #8b4513;    /* Active elements */

--border: #d4a574;          /* Borders */npm run build      },

--completed: #999;          /* Completed tasks */

```### React Hooks



### UI Elements      // other options...



- **Checkbox**: Custom styled with vintage accent color- `useState` - state management for tasks, filter, input

- **Buttons**: Icon buttons with hover animations

- **Filters**: Pill-shaped buttons with smooth transitions- `useEffect` - syncing with localStorage# Preview production build    },

- **Input**: Large handwritten-style input field

- **Task Items**: Hover effects with scale transform- Lazy initialization: loading saved tasks on mount

- **Completed Tasks**: Strikethrough with opacity fade

- Functional state updates with `map()` and `filter()`npm run preview  },

## 💡 Usage Example

- Dependencies array in useEffect

```typescript

// Task Interface```])

interface Task {

  id: number;### Data Management

  text: string;

  completed: boolean;`````

}

- **localStorage** - saving and loading tasks

// Adding a Task

const addTask = (text: string) => {- JSON serialization/deserialization## 📂 Project Structure

  const newTask: Task = {

    id: Date.now(),- Array methods: `map()`, `filter()`, `find()`

    text,

    completed: false,- Filtering logic for different viewsYou can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

  };

  setTasks([...tasks, newTask]);- Generating unique IDs with `Date.now()`

};

`````text

// Toggling Task

const toggleTask = (id: number) => {### Component Architecture

  setTasks(

    tasks.map((task) =>todo-list/```js

      task.id === id ? { ...task, completed: !task.completed } : task

    )- Component decomposition

  );

};- Props interface typing├── src/// eslint.config.js



// Filtering Tasks- Passing callbacks to child components

const getFilteredTasks = () => {

  if (filter === "active") return tasks.filter((t) => !t.completed);- Controlled inputs│   ├── App.tsx           # Main component with logicimport reactX from 'eslint-plugin-react-x'

  if (filter === "completed") return tasks.filter((t) => t.completed);

  return tasks;- Conditional rendering

};

```- Key prop for lists│   ├── App.css           # Application stylesimport reactDom from 'eslint-plugin-react-dom'



## 🔄 State Management



### Task State### CSS│   ├── TaskItem.tsx      # Task item component



```typescript

const [tasks, setTasks] = useState<Task[]>(() => {

  const saved = localStorage.getItem("tasks");- Google Fonts integration│   ├── TaskInput.tsx     # Input field componentexport default defineConfig([

  return saved ? JSON.parse(saved) : [];

});- CSS gradients `linear-gradient()`

```````````

- Box-shadow for depth effect│ ├── FilterButtons.tsx # Filter buttons component globalIgnores(['dist']),

### LocalStorage Sync

- Transitions for smooth animations

```typescript

useEffect(() => {- Hover effects with `transform`│   ├── main.tsx          # Entry point  {

  localStorage.setItem("tasks", JSON.stringify(tasks));

}, [tasks]);- Pseudo-elements `::before`, `::placeholder`

```

- Text-decoration for completed tasks│ └── index.css # Global styles files: ['**/*.{ts,tsx}'],

### Filter State

- Accent-color for checkboxes

```typescript

const [filter, setFilter] = useState<FilterType>("all");├── public/               # Static files    extends: [

```

## Main Components

## 🎯 Key Features Explained

├── package.json # Dependencies // Other configs...

### Filter System

### App.tsx

Three filter states available:

├── vite.config.ts # Vite configuration // Enable lint rules for React

- **All**: Shows all tasks

- **Active**: Shows only incomplete tasksMain component with state and logic:

- **Completed**: Shows only completed tasks

└── tsconfig.json # TypeScript configuration reactX.configs['recommended-typescript'],

Filter buttons have visual feedback with active state styling.

- Tasks array management

### Auto-Save

- Current filter state``` // Enable lint rules for React DOM

Every change to tasks automatically saves to localStorage:

- Input value state

- Adding tasks

- Completing tasks- CRUD operations: add, toggle, delete tasks reactDom.configs.recommended,

- Deleting tasks

- All changes persist on page reload- Filtering logic

### Component Props- localStorage integration## 🎓 What I Learned ],

```typescript

interface TaskItemProps {

  task: Task;### TaskItem.tsx    languageOptions: {

  onToggle: (id: number) => void;

  onDelete: (id: number) => void;

}

Individual task component:### TypeScript      parserOptions: {

interface TaskInputProps {

  value: string;

  onChange: (value: string) => void;

  onSubmit: () => void;- Checkbox for completion status        project: ['./tsconfig.node.json', './tsconfig.app.json'],

}

- Task text with click handler

interface FilterButtonsProps {

  current: FilterType;- Delete button- ✅ Type aliases: `type FilterType = "all" | "active" | "completed"`        tsconfigRootDir: import.meta.dirname,

  onChange: (filter: FilterType) => void;

}- Visual styling for completed tasks

```

- ✅ Interfaces: `interface Task`, `interface TaskItemProps` },

## 📱 Responsive Design

### TaskInput.tsx

The app is fully responsive:

- ✅ Exporting types: `export type FilterType` // other options...

- **Mobile**: Stacked layout, full width

- **Tablet**: Centered with paddingInput field component:

- **Desktop**: Centered card with max-width

- ✅ Type-only imports: `import type { Task } from "./App"` },

```css

.app {- Controlled input

  max-width: 600px;

  margin: 0 auto;- Add button- ✅ Function typing: `(id: number) => void`  },

  padding: 20px;

}- Enter key support

```

- Input validation- ✅ Event typing: `React.ChangeEvent<HTMLInputElement>`])

## ✅ Browser Support

- Chrome 90+

- Firefox 88+### FilterButtons.tsx````

- Safari 14+

- Edge 90+

## 🔮 Future EnhancementsFilter buttons component:### React Hooks

- [ ] Task categories/tags

- [ ] Due dates

- [ ] Priority levels- Three filter options (All / Active / Completed)- ✅ `useState` - state management for tasks, filter, input

- [ ] Search functionality

- [ ] Dark/light theme toggle- Active button highlighting- ✅ `useEffect` - syncing with localStorage

- [ ] Task editing

- [ ] Drag-and-drop reordering- Filter change handler- ✅ Lazy initialization: loading saved tasks on mount

- [ ] Export/import tasks

- [ ] Task statistics- ✅ Functional state updates with `map()` and `filter()`

- [ ] Undo/redo functionality

## Design Features- ✅ Dependencies array in useEffect

## 📝 Commits

All changes are tracked in git with detailed commit messages following the conventional commits standard:

- Vintage paper texture effect### Data Management

- `feat:` - new features

- `fix:` - bug fixes- Handwritten Caveat font

- `docs:` - documentation changes

- `style:` - formatting, missing semicolons, etc- Brown/beige retro color palette- ✅ **localStorage** - saving and loading tasks

- `refactor:` - code restructuring

- `test:` - adding tests- Smooth hover animations- ✅ JSON serialization/deserialization

- `chore:` - maintenance tasks

- 3D button effects with gradients- ✅ Array methods: `map()`, `filter()`, `find()`

---

- Typewriter-style interface- ✅ Filtering logic for different views

Made with ❤️ using React, TypeScript, and Vite

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

```

```
