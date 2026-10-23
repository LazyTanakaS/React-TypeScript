# React-TypeScript — Front-End Practice Projects

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

## Overview

**React-TypeScript** is a collection of practice projects built to master modern front-end development with React and TypeScript.

**Goal:** Build production-ready React applications while learning TypeScript, modern React patterns, and best practices.

---

## Repository & Live Demos

**Repository:** [LazyTanakaS/React-TypeScript](https://github.com/LazyTanakaS/React-TypeScript)  
**Live Demos:** [Expenses Tracker](https://lazytanakas.github.io/React-TypeScript/expenses-tracker/) | [Todo List](https://lazytanakas.github.io/React-TypeScript/todo-list/) | [Weather App](https://lazytanakas.github.io/React-TypeScript/weather-app/) | [Counter](https://lazytanakas.github.io/React-TypeScript/counter/)  
**Testing:** [Testing instructions](#testing)  
**CI:** [GitHub Actions workflow](https://github.com/LazyTanakaS/React-TypeScript/actions/workflows/deploy.yml)

---

## Project Goal

To develop practical front-end skills by building real-world applications using React, TypeScript, and modern web technologies.  
Each project focuses on specific skills before moving to more complex applications.

---

## Tech Stack

**Current:**

- TypeScript
- Vite
- CSS3 (Flexbox, Grid, Responsive Design)
- LocalStorage API

**Next Steps:**

- Next.js (SSR, routing)
- State management (Zustand/Redux)
- API integration (REST, GraphQL)

---

## Projects Overview

| Project                 | Description                    | Technologies                    |
| ----------------------- | ------------------------------ | ------------------------------- |
| **Expenses Tracker** | Full-featured expense tracking | React, TypeScript, LocalStorage |
| **Todo List**        | Clean task management          | React, TypeScript, Filters      |
| **Weather App**      | Real-time weather information  | React, TypeScript, API          |
| **Counter**          | Simple counter app             | React, TypeScript, Hooks        |

---

## Screenshots

### Expenses Tracker

![Expenses Tracker](./screenshots/expenses-tracker-1.png)
![Expenses Tracker](./screenshots/expenses-tracker-2.png)
![Expenses Tracker](./screenshots/expenses-tracker-3.png)

**[View Project →](./expenses-tracker)**

---

### Todo List

![Todo List](./screenshots/todo-list.png)

**[View Project →](./todo-list)**

---

### Weather App

![Weather App](./screenshots/weather-app-1.png)
![Weather App](./screenshots/weather-app-2.png)

**[View Project →](./weather-app)**

---

### Counter App

![Counter](./screenshots/counter.png)

**[View Project →](./counter)**

---

## Project Structure

```text
React-TypeScript/
│
├── counter/              # Simple counter app
├── todo-list/            # Todo list with filters
├── weather-app/          # Weather API integration
├── expenses-tracker/     # Expense tracking app
│
└── screenshots/          # Project screenshots
    ├── expenses-tracker.png
    ├── todo-list.png
    ├── weather-app.png
    └── counter.png
```

---

## Installation & Running

```bash
# Clone the repository
git clone https://github.com/LazyTanakaS/React-TypeScript.git
cd React-TypeScript

# Choose a project
cd expenses-tracker

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## Testing

The Expenses Tracker tests use Vitest and React Testing Library. From the `expenses-tracker` directory, run:

```bash
npm test -- --run
```

---

## Author

**Petr (Tanaka)**  
Aspiring Front-End Developer — learning by building real applications.  
Focused on React, TypeScript, and modern web development.

**Location:** Prague, Czech Republic  
**Status:** Open to Junior Frontend positions
