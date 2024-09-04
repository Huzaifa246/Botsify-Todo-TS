import React, { useState } from 'react';
import { ListItem, ListItemText, IconButton, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from './UI/Modal';
import Input from './UI/Input';
import Button from './UI/Button';
import { Todo } from '../contexts/TodoContext';
import CloseIcon from '@mui/icons-material/Close';

interface TodoItemProps {
    todo: Todo;
    onDelete: (id: string) => void;
    onEdit: (todo: Todo) => void;
}
const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onEdit }) => {
    const [open, setOpen] = useState(false);
    const [editTodo, setEditTodo] = useState({ ...todo });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleEdit = () => {
        onEdit(editTodo);
        handleClose();
    };
    return (
        <>
            <ListItem>
                <ListItemText primary={todo.title} secondary={todo.description} />
                <IconButton edge="end" aria-label="edit" onClick={handleOpen}>
                    <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => onDelete(todo.id)}>
                    <DeleteIcon />
                </IconButton>
            </ListItem>

            <Modal open={open} onClose={handleClose} >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Input
                        label="Title"
                        value={editTodo.title}
                        onChange={(e) => setEditTodo({ ...editTodo, title: e.target.value })}
                    />
                    <Input
                        label="Description"
                        value={editTodo.description}
                        onChange={(e) => setEditTodo({ ...editTodo, description: e.target.value })}
                    />
                    <Button variant="contained" color="primary" onClick={handleEdit}>
                        Save
                    </Button>
                </Box>
            </Modal>
        </>
    )
}

export default TodoItem