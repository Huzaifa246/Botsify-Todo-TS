import React from 'react';
import { List } from '@mui/material';
import TodoItem from './TodoItem';
import { useTodos } from '../contexts/TodoContext';

const TodoList: React.FC = () => {
    const { todos, deleteTodo, editTodo } = useTodos();
    return (
        <List>
            {todos?.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} onEdit={editTodo} />
            ))}
        </List>
    );
}

export default TodoList;