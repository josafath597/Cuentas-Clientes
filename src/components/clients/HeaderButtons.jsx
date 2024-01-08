import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Typography } from '@mui/material';

const HeaderButtons = ({ isViewTableClients, setIsViewTableClients }) => (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button
            sx={{
                backgroundColor: isViewTableClients ? '#FFA07A ' : '#405074',
                '&:hover': {
                    backgroundColor: isViewTableClients ? '#CD5C5C' : '#293456'
                }
            }}
            onClick={() => setIsViewTableClients(true)}
        >
            <Typography sx={{ fontWeight: 600, fontSize: '1.125rem' }}>Clientes</Typography>
        </Button>
        <Button
            sx={{
                backgroundColor: !isViewTableClients ? '#FFA07A ' : '#405074',
                '&:hover': {
                    backgroundColor: !isViewTableClients ? '#CD5C5C' : '#293456'
                }
            }}
            onClick={() => setIsViewTableClients(false)}
        >
            <Typography sx={{ fontWeight: 600, fontSize: '1.125rem' }}>Cuentas</Typography>
        </Button>
    </ButtonGroup>
);

HeaderButtons.propTypes = {
    isViewTableClients: PropTypes.bool.isRequired,
    setIsViewTableClients: PropTypes.func.isRequired
};

export default HeaderButtons;
