import React from 'react';
import { Container, Typography } from '@mui/material';
import './App.css';
import { TodoProvider } from './contexts/TodoContext'
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
function App() {
    return (
      <>
        <TodoProvider>
          <Container maxWidth="sm">
            <Typography variant="h3" align="center" gutterBottom>
              Todo App - TS
            </Typography>
            <AddTodo />
            <TodoList />
          </Container>
        </TodoProvider>
      </>
    );
  }

export default App;
