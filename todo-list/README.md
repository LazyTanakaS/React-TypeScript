# Todo List App — React + TypeScript

![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7-purple?style=flat-square&logo=vite)

## Overview

A beautiful todo list application with vintage design, filters, and data persistence.

**Goal:** Practice CRUD operations, filtering logic, and localStorage integration.

---

## Features

- ➕ **Add new tasks**
- ✅ **Mark tasks as completed**
- ❌ **Delete tasks**
- 🔍 **Filter tasks** (All / Active / Completed)
- � **Auto-save to localStorage** (data persists on reload)
- 🎨 **Vintage retro design** with handwritten font
- ✨ **Smooth animations** and hover effects
- 📱 **Responsive interface**

---

## Technologies

- **React 18** - UI library
- **TypeScript 5** - type safety
- **Vite 7** - fast build tool
- **CSS3** - gradients, shadows, and animations
- **LocalStorage API** - data persistence
- **Google Fonts** - Caveat (handwritten font)

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

## Project Structure

```text
todo-list/
├── src/
│   ├── App.tsx           # Main component with logic
│   ├── App.css           # Application styles
│   ├── TaskItem.tsx      # Task item component
│   ├── TaskInput.tsx     # Input field component
│   ├── FilterButtons.tsx # Filter buttons component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static files
├── package.json          # Dependencies
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

---

## What I Learned

### TypeScript

- Type aliases: `type FilterType = "all" | "active" | "completed"`
- Interfaces: `interface Task`, `interface TaskItemProps`
- Exporting types: `export type FilterType`
- Type-only imports: `import type { Task } from "./App"`
- Function typing: `(id: number) => void`
- Event typing: `React.ChangeEvent<HTMLInputElement>`

### React Hooks

- `useState` - state management for tasks, filter, input
- `useEffect` - syncing with localStorage
- Lazy initialization: loading saved tasks on mount
- Functional state updates with `map()` and `filter()`
- Dependencies array in useEffect

### Data Management

- **localStorage** - saving and loading tasks
- JSON serialization/deserialization
- Array methods: `map()`, `filter()`, `find()`
- Filtering logic for different views
- Generating unique IDs with `Date.now()`

### Component Architecture

- Component decomposition
- Props interface typing
- Passing callbacks to child components
- Controlled inputs
- Conditional rendering
- Key prop for lists

### CSS

- Google Fonts integration
- CSS gradients `linear-gradient()`
- Box-shadow for depth effect
- Transitions for smooth animations
- Hover effects with `transform`
- Pseudo-elements `::before`, `::placeholder`
- Text-decoration for completed tasks
- Accent-color for checkboxes

---

## Main Components

### App.tsx

Main component with state and logic:

- Tasks array management
- Current filter state
- Input value state
- CRUD operations: add, toggle, delete tasks
- Filtering logic
- localStorage integration

### TaskItem.tsx

Individual task component:

- Checkbox for completion status
- Task text with click handler
- Delete button
- Visual styling for completed tasks

### TaskInput.tsx

Input field component:

- Controlled input
- Add button
- Enter key support
- Input validation

### FilterButtons.tsx

Filter buttons component:

- Three filter options (All / Active / Completed)
- Active button highlighting
- Filter change handler

---

## Design Features

- 📄 **Vintage paper texture** effect
- 🖋️ **Handwritten Caveat font**
- 🎨 **Brown/beige retro** color palette
- ✨ **Smooth hover animations**
- 🔳 **3D button effects** with gradients
- 📝 **Typewriter-style interface**

### Color Palette

```css
--cream: #fef6e4; /* Background */
--paper: #fffaf0; /* Card background */
--ink: #3d3522; /* Text color */
--accent-brown: #8b4513; /* Active elements */
--border: #d4a574; /* Borders */
--completed: #999; /* Completed tasks */
```

---

## Key Functions

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

---

## State Management

### Task State

```typescript
const [tasks, setTasks] = useState<Task[]>(() => {
  const saved = localStorage.getItem("tasks");
  return saved ? JSON.parse(saved) : [];
});
```

### LocalStorage Sync

```typescript
useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
```

### Filter State

```typescript
const [filter, setFilter] = useState<FilterType>("all");
```

---

## Usage

1. **Add a task**: Type text in the input field and press Enter or click "Add"
2. **Complete a task**: Click the checkbox or task text
3. **Delete a task**: Click the "Delete" button
4. **Filter tasks**: Use the filter buttons to show All, Active, or Completed tasks
5. **Data persists**: All tasks are automatically saved to localStorage

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## Future Enhancements

- [ ] Edit task text
- [ ] Task priorities
- [ ] Due dates
- [ ] Categories/tags
- [ ] Search functionality
- [ ] Dark mode
- [ ] Drag & drop reordering
- [ ] Task statistics

---

Made with ❤️ using React + TypeScript
