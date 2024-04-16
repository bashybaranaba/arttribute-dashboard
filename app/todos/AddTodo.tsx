"use client";
import React, { useState } from "react";
import { Button, Box, TextField } from "@mui/material";

function AddTodo({ setTodos }: any) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState(1);

  const handleAdd = () => {
    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, priority }),
    })
      .then((response) => response.json())
      .then((newTodo) => {
        setTodos((prev: any) => [...prev, newTodo]);
        setTitle("");
        setPriority(1);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <Box>
      <TextField
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new todo"
        fullWidth
        sx={{ m: 1 }}
      />
      <TextField
        type="number"
        value={priority}
        onChange={(e) => setPriority(Number(e.target.value))}
        placeholder="Priority"
        fullWidth
        sx={{ m: 1 }}
      />
      <Button variant="contained" fullWidth onClick={handleAdd} sx={{ m: 1 }}>
        Add
      </Button>
    </Box>
  );
}

export default AddTodo;
