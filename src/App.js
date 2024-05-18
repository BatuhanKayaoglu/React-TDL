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
<<<<<<< HEAD
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

=======
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          Learn React
          Learn React
          Learn React
        </a>
>>>>>>> b36bf8b247c039b3bb68ad351e94f8fbea1899fb
      </header>
    </div>
  );
}

export default App;
