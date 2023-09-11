import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-700 text-white ">
      <h1 className="text-xl font-serif capitalize">{task.title}</h1>
      <p>{task.description}</p>
      <button
        className="bg-emerald-500 py-2 rounded-md"
        onClick={() => deleteTask(task.id)}
      >
        Delete Task{" "}
      </button>
    </div>
  );
}
export default TaskCard;
