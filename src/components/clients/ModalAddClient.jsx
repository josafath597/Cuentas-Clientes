import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, Modal, Typography, useTheme } from '@mui/material';
import FormAddClient from './FormAddClient';
import { styleForm, styleForm2 } from '../../utils/stylesTable';

const ModalAddClient = ({ fetchClients, isLoading }) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Button variant="contained" onClick={handleOpen} disabled={isLoading}>
                <Typography sx={{ color: theme.palette.grey[100], fontWeight: 700 }}>Crear Cliente</Typography>
            </Button>
            <Modal open={open} onClose={handleClose} sx={{ ...styleForm }} slotProps={styleForm2}>
                <FormAddClient handleClose={handleClose} fetchClients={fetchClients} />
            </Modal>
        </>
    );
};

ModalAddClient.propTypes = {
    fetchClients: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default ModalAddClient;
