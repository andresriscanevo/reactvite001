import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    createTask({ title, description });
    setDescription("");
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Write the task"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Write the description "
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className="bg-blue-500 mb-3 p-3 ">Save</button>
      </form>
    </div>
  );
}
