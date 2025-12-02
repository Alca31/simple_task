import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AddTask } from "./components/AddTask";
import './App.css'
import { ShowTask } from "./components/ShowTask";
import type { Task } from "./types/TaskType";

function App() {

const [tasks, setTasks] = useState<Task[]>([]);

function handleAddTask(newTask: Omit<Task, "id">) {
    const id = tasks.length + 1; // version simple et lisible
    setTasks([...tasks, { id, ...newTask }]);
}


  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/Tasks">Ajouter des tâches</Link>
        <Link to="/ShowTasks">Voir mes tâches</Link>
      </nav>

      <Routes>
        <Route
          path="/Tasks"
          element={<AddTask onAddTask={handleAddTask} />}
        />
        <Route
          path="/ShowTasks"
          element={<ShowTask tasks={tasks} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


