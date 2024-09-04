import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

interface InputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, value, onChange, ...props }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      {...props}
      style={{ margin: "10px 0"}}
    />
  );
};

export default Input;
