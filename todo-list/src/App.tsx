import "./App.css";
import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import TaskInput from "./TaskInput";
import FilteredButtons from "./FilterButtons";

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export type FilterType = "all" | "active" | "completed";

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");

    if (saved) {
      return JSON.parse(saved);
    }

    return [];
  });
  const [filter, setFilter] = useState<FilterType>("all");
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (!inputValue.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const handleToggleTask = (id: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTask = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
  });

  return (
    <div className="app">
      <h1>Todo List</h1>

      <div className="input-container">
        <TaskInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onAdd={handleAddTask}
        />
      </div>
      <div className="filters">
        <FilteredButtons currentFilter={filter} onFilterChange={setFilter} />
      </div>

      <ul className="task-list">
        {filteredTask.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
