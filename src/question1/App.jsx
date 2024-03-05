// 1. Kommentarslista 3p
// Skapa en React-komponent för att hantera och visa en lista
// med kommentarer. Användare ska kunna lägga till och ta bort kommentarer.
// Listan är tom från början.

// Skapa Ett inputfält och en "Lägg till"-knapp för nya kommentarer.
// och en "Ta bort"-knapp bredvid varje kommentar för att ta bort den från listan.

import { useState } from "react";

function App() {
  const [comment, setComment] = useState([]);
  const [input, setInput] = useState("");

  function handleOnChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit() {
    const todoObj = {
      id: Date.now(),
      title: input,
      done: false,
    };

    setComment([...comment, todoObj]);
    setInput("");
  }

  function handleRemove(removeId) {
    setComment(comment.filter((t) => t.id !== removeId));
  }

  const todoComment = comment.map((todoObj) => (
    <TodoItem todoObj={todoObj} handleRemove={handleRemove} />
  ));

  function TodoItem({ todoObj, handleRemove }) {
    return (
      <li className="comment">
        <input
          type="text"
          value={todoObj.title}
          style={{ textDecoration: todoObj.done ? "line-through" : "none" }}
          readOnly
        />
        <button onClick={() => handleRemove(todoObj.id)}>Remove</button>
      </li>
    );
  }

  return (
    <div>
      <h1>Comment list</h1>
      <input value={input} type="text" onChange={handleOnChange} />
      <button onClick={handleSubmit}>Comment</button>
      <ol>{todoComment}</ol>
    </div>
  );
}

export default App;
