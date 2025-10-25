import React from "react";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li style={styles.item}>
      <span
        style={{
          ...styles.text,
          textDecoration: todo.done ? "line-through" : "none",
          color: todo.done ? "gray" : "black",
        }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button style={styles.delBtn} onClick={() => deleteTodo(todo.id)}>
        ❌
      </button>
    </li>
  );
}

const styles = {
  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  },
  text: {
    cursor: "pointer",
    fontSize: "18px",
  },
  delBtn: {
    backgroundColor: "#e74c3c",
    border: "none",
    color: "white",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default TodoItem;
