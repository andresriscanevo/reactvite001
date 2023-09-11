import { createContext, useState, useEffect } from "react";

import data from "../data/tasks.json";
export const TaskContext = createContext();
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  function createTask(task) {
    setTasks([
      ...tasks,
      { title: task.title, id: tasks.length, description: task.description },
    ]);
  }

  function deleteTask(taskId) {
    tasks.filter((tasks) => tasks.id !== taskId);
  }
  useEffect(() => {
    setTasks(data);
  }, []);
  return (
    <TaskContext.Provider value={{ tasks, deleteTask, createTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
