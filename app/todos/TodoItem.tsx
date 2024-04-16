import React from "react";
import { Card, Button } from "@mui/material";
function TodoItem({ todo, setTodos }: any) {
  const handleDelete = () => {
    fetch(`http://localhost:3001/todos`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: todo.id }),
    })
      .then((response) => response.json())
      .then(() =>
        setTodos((prev: any[]) => prev.filter((t) => t.id !== todo.id))
      )
      .catch((error) => console.error("Error:", error));
  };

  return (
    <Card sx={{ m: 1, p: 2, width: "100%" }}>
      {todo.title} - Priority: {todo.priority}
      <Button
        variant="outlined"
        onClick={handleDelete}
        sx={{ textTransform: "none", ml: 4 }}
      >
        Delete
      </Button>
    </Card>
  );
}

export default TodoItem;
