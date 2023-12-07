import './App.css';
import TaskList from './components/Task_List';

function App() {
  return (
    <div className="task_app">
      <div className="title">
        <h1>Tasks App</h1>
      </div>
      <div className="task_main_list">
        <h1>My Tasks</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
