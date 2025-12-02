import type { Task } from "../types/TaskType";


type Props = {
  tasks: Task[];
};

export function ShowTask({ tasks }: Props) {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="task-card">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}



