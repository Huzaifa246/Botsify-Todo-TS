import React from 'react';
import { Modal as MUIModal, Box, ModalProps as MUIModalProps } from '@mui/material';

interface CustomModalProps extends Omit<MUIModalProps, 'children'> {
  children: React.ReactNode;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const Modal: React.FC<CustomModalProps> = ({ children, ...props }) => {
  return (
    <MUIModal {...props}>
      <Box sx={style}>
        {children}
      </Box>
    </MUIModal>
  );
};

export default Modal;
