"use client";
import { useState, useEffect } from "react";
import { Button, Box, Grid, Typography } from "@mui/material";

import AppNavbar from "../components/layout/AppNavbar";
import Footer from "../components/layout/Footer";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <Box sx={{ px: 5 }}>
        <AppNavbar />
      </Box>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h4" sx={{ mt: 6, fontWeight: 600 }}>
          Todos
        </Typography>
        <AddTodo setTodos={setTodos} />
        <Grid container maxWidth="md">
          {(todos as { id: string }[]).map((todo) => (
            <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
          ))}
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
