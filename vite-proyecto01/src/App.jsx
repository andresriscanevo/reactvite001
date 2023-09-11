import "./App.css";
import TaskList from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";

function App() {
  return (
    <>
      <div className="bg-slate-400 container mx-auto my-auto">
        <TaskForm />

        <TaskList />
      </div>
    </>
  );
}
export default App;
