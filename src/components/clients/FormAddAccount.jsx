/* eslint-disable no-loss-of-precision */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CloseIcon from '@mui/icons-material/Close';

import * as yup from 'yup';
import { Autocomplete, Box, Button, CircularProgress, Grid, IconButton, TextField, Typography } from '@mui/material';
import { addCount } from '../../FirebaseApi/Providers/addCount';

const schema = yup
    .object({
        cuenta: yup
            .number()
            .transform((value, originalValue) => (String(originalValue).trim() === '' ? undefined : value))
            .required('La cuenta es requerida')
            .positive('La cuenta debe ser un número positivo')
            .integer('La cuenta debe ser un número entero')
            .max(9999999999999999, 'La cuenta debe tener como máximo 16 dígitos')
    })
    .required();

const FormAddAccount = ({ clients, handleClose, fetchClients }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [optionsCLient, setOptionsCLient] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedClient, setSelectedClient] = useState(null);
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        const filterDataCLients = clients.filter((client) => !client.hasClient);
        const newOptionsClients = filterDataCLients.map((client) => ({
            label: `${client.names} ${client.paterno} ${client.materno}`,
            id: client.id
        }));
        setOptionsCLient(newOptionsClients);
        setSelectedClient(newOptionsClients[0]);
    }, [clients]);

    const onSubmit = async (data) => {
        if (!selectedClient?.label) {
            setErrorMessage('Debe Seleccionar un Cliente');
            return;
        }
        setIsLoading(true);
        await addCount({ cuenta: data.cuenta, cliente: selectedClient.label, idCliente: selectedClient.id });
        setErrorMessage('');
        fetchClients();
        handleClose();
        setIsLoading(false);
    };
    return isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <CircularProgress />
        </Box>
    ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
            <IconButton aria-label="cerrar" color="primary" sx={{ position: 'absolute', right: 5, top: 3 }} onClick={handleClose}>
                <CloseIcon />
            </IconButton>
            <Grid container spacing={2} display="flex" justifyContent="center">
                <Grid item>
                    <Controller
                        name="cuenta"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Numero de cuenta"
                                error={!!errors.cuenta}
                                helperText={errors.cuenta?.message}
                                sx={{ width: '100%' }}
                            />
                        )}
                    />
                </Grid>
                <Grid item>
                    <Autocomplete
                        value={selectedClient}
                        onChange={(event, newValue) => {
                            setSelectedClient(newValue);
                        }}
                        sx={{ width: 300 }}
                        options={optionsCLient}
                        renderInput={(params) => <TextField {...params} label="Nombre del cliente" />}
                    />
                </Grid>
            </Grid>
            <Grid marginTop={1}>
                {errorMessage && (
                    <Typography textAlign="center" color="red">
                        {errorMessage}
                    </Typography>
                )}
            </Grid>
            <Grid marginTop={2} display="flex" justifyContent="center">
                <Button type="submit" variant="contained" color="primary">
                    <Typography>Agregar Cuenta</Typography>
                </Button>
            </Grid>
        </form>
    );
};

FormAddAccount.propTypes = {
    clients: PropTypes.array.isRequired,
    handleClose: PropTypes.func.isRequired,
    fetchClients: PropTypes.func.isRequired
};

export default FormAddAccount;
