import { useState } from "react";
import type { Task } from "../types/TaskType";

interface AddTaskProps {
  onAddTask: (task: Omit<Task, "id">) => void;
}

export function AddTask({ onAddTask }: AddTaskProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    onAddTask({ title, description });

    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter une tâche</h2>

      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <button type="submit">Ajouter</button>
    </form>
  );
}

