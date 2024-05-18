import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);


  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    filterHandler(todos);
    saveLocalStorage();
  }, [todos, status])

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;

      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
    }
  };



  // save to local storage  
  const saveLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getLocalStorage = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  };

  return (
    <div className="App">
      <header>
        <h1 className="">MY TODO LİST</h1>
        <Form inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus} />

        <TodoList todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos} />

      </header>
    </div>
  );
}

export default App;
