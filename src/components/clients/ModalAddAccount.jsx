import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Typography, useTheme } from '@mui/material';
import FormAddAccount from './FormAddAccount';
import { styleForm, styleForm2 } from '../../utils/stylesTable';

const ModalAddAccount = ({ isLoading, fetchClients, clients }) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Button variant="contained" disabled={isLoading} onClick={handleOpen}>
                <Typography sx={{ color: theme.palette.grey[100], fontWeight: 700 }}>Agregar Cuenta</Typography>
            </Button>
            <Modal open={open} onClose={handleClose} sx={{ ...styleForm, height: '20%' }} slotProps={styleForm2}>
                <FormAddAccount handleClose={handleClose} fetchClients={fetchClients} clients={clients} />
            </Modal>
        </>
    );
};

ModalAddAccount.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    fetchClients: PropTypes.func.isRequired,
    clients: PropTypes.array.isRequired
};

export default ModalAddAccount;
