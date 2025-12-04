import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AddTask } from "./components/AddTask";
import './App.css'
import { ShowTask } from "./components/ShowTask";
import type { Task } from "./types/TaskType";

function App() {

const [tasks, setTasks] = useState<Task[]>([]);
//on enlève l'id de la tâche vu qu'il est pas présent à cette étape de la création
function handleAddTask(newTask: Omit<Task, "id">) {
  //on ajoute +1 à l'index du tableau Task, ce qui permet de commencer à 1 au lieu de 0 qui est vide
  //on utilise l'index pour créer l'id de la tâche
    const id = tasks.length + 1;//on parcours le tableau d'objet par l'id de la tâche
    setTasks([...tasks, { id, ...newTask }]);//on reprends l'ancien tableau, et on ajoute une nouvelle tâche.
}

/* handleAddtaks est équivalent à : 
const newArray = [];
for (let i = 0; i < prev.length; i++) {
  newArray.push(prev[i]);
}

const newTaskObj = {
  id: prev.length + 1,
  title: newTask.title,
  description: newTask.description,
};

newArray.push(newTaskObj);

setTasks(newArray);

...prev

→ dépose tous les éléments de prev dans un nouveau tableau.

...newTask

→ dépose toutes les propriétés de l’objet newTask dans un nouvel objet.
*/

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


