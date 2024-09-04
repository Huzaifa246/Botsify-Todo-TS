import React, { useState } from 'react';
import { useTodos } from '../contexts/TodoContext';
import Input from './UI/Input';
import Button from './UI/Button';
import { v4 as uuidv4 } from 'uuid';

const AddTodo: React.FC = () => {
    const { addTodo } = useTodos();
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleAdd = () => {
        if (title.trim() && description.trim()) {
            addTodo({
                id: uuidv4(),
                title,
                description
            });
            setTitle('');
            setDescription('');
        }
    }
    return (
        <>
            <div>
                <Input
                    label="Title"
                    value={title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                />
                <Input
                    label="Description"
                    value={description}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={handleAdd}>
                    Add Todo
                </Button>
            </div>
        </>
    )
}

export default AddTodo
