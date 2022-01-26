import { useState } from 'react';
import styles from './App.module.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleAdd = () => {
    setTodos([...todos, todo]);
    setTodo("");
  }

  const handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    setTodo(value);
  }

  const handleDelete = (index) => {
    const newTodos = todos.filter((t, currentIndex) => currentIndex !== index);
    console.log(newTodos);
    setTodos(newTodos);
  }

  console.log("todos:", todos);

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input name="todo" className={styles.todoInput} onChange={handleChange} value={todo} />
        <button className={styles.btn} onClick={handleAdd}>Add</button>
      </div>
      <div>TODO</div>
      {todos.map((t, index) => (
        <div key={`${t}_${index}`} className={styles.todos}>
          <p>{t}</p>
          <button onClick={() => handleDelete(index)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default App;
