import React, { createContext, useContext, useState } from 'react';

export interface Todo {
    id: string;
    title: string;
    description: string;
  }

  interface TodoContextProps {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    editTodo: (updatedTodo: Todo) => void;
    deleteTodo: (id: string) => void;
  }

  const TodoContext = createContext<TodoContextProps | undefined>(undefined);

  export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [todos, setTodos] = useState<Todo[]>([]);
  
    const addTodo = (todo: Todo) => {
      setTodos([...todos, todo]);
    };
  
    const editTodo = (updatedTodo: Todo) => {
      setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
    };
  
    const deleteTodo = (id: string) => {
      setTodos(todos.filter(todo => todo.id !== id));
    };
  
    return (
      <TodoContext.Provider value={{ todos, addTodo, editTodo, deleteTodo }}>
        {children}
      </TodoContext.Provider>
    );
  };

  export const useTodos = () => {
    const context = useContext(TodoContext);
    if (context === undefined) {
      throw new Error('useTodos must be used within a TodoProvider');
    }
    return context;
  };