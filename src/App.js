import logo from './logo.svg';
import './App.css';
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {

  return (
      <div className='container bg-white p-4 mt-5'>
        <h1>My Todo List</h1>
        <AddTodoForm />
        <TodoList />
      </div>
  );
}

export default App;
