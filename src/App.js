import { useEffect, useState } from 'react';
import AddTodos from './components/AddTodos';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  let inittodo;
  if (localStorage.getItem("todos") == null) {
    inittodo = []
  }
  else {
    inittodo = JSON.parse(localStorage.getItem("todos"));

  }
  const onDelteTodo = (todo) => {
    setTodos(todos.filter((e) => {
      return (e !== todo)
    }))
    localStorage.removeItem("todo", JSON.stringify(todos));

  }
  const Addtodos = (title) => {
    let sno;
    if (todos.length == 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const newTodo = {
      sno: sno,
      title: title
    }
    setTodos([...todos, newTodo])

  }
  const [todos, setTodos] = useState(inittodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<>
          <Navbar active={true} />
          <AddTodos Addtodos={Addtodos} />
          <Todos todos={todos} onDelteTodo={onDelteTodo} />
        </>}>
        </Route>
        <Route exact path='/about' element={
          <>
          <Navbar active={false} />
            <About />
          </>

        }>
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
