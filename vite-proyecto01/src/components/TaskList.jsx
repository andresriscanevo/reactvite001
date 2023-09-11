import { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
function TaskList() {
  const { tasks } = useContext(TaskContext);

  return tasks.length ? (
    <div className="grid grid-cols-4 gap-2 p-4 rounded-md">
      {tasks.map((task) => {
        <TaskCard key={task.id} task={task} />;
      })}
    </div>
  ) : (
    <h1>No exist task</h1>
  );
}

export default TaskList;
