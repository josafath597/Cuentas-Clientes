/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';
import {
    Box,
    Button,
    CircularProgress,
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from '@mui/material';
import { addClient } from '../../FirebaseApi/Providers/addClient';
import CloseIcon from '@mui/icons-material/Close';

const curpRegex =
    /^[A-Z][AEIOU][A-Z]{2}\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])[HM](AS|BC|BS|CC|CL|CM|CS|CH|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d]\d$/;

const schema = yup
    .object({
        names: yup.string().required('El nombre es requerido'),
        paterno: yup.string().required('El apellido Paterno es Requerido'),
        materno: yup.string().required('El apellido Materno es Requerido'),
        genero: yup.string().required('El Genero es Requerido'),
        email: yup.string().email('Por favor, ingresa un correo electrónico válido').required('El correo electrónico es requerido'),
        edad: yup
            .number()
            .transform((value, originalValue) => (String(originalValue).trim() === '' ? undefined : value))
            .required('La edad es requerida')
            .positive('La edad debe ser un número positivo')
            .integer('La edad debe ser un número entero'),
        curp: yup.string().matches(curpRegex, 'Por favor, ingresa un CURP válido').required('El CURP es requerido')
    })
    .required();

const FormAddClient = ({ handleClose, fetchClients }) => {
    const [isLoading, setIsLoading] = useState(false);
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        setIsLoading(true);
        await addClient(data);
        await fetchClients();
        setIsLoading(false);
        handleClose();
    };
    return !isLoading ? (
        <form onSubmit={handleSubmit(onSubmit)}>
            <IconButton aria-label="cerrar" color="primary" sx={{ position: 'absolute', right: 5, top: 3 }} onClick={handleClose}>
                <CloseIcon />
            </IconButton>
            <Typography variant="h4" textAlign="center" fontWeight={500} marginBottom={2}>
                Crear Cliente
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Controller
                        name="names"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Nombre"
                                error={!!errors.names}
                                helperText={errors.names?.message}
                                sx={{ width: '100%' }}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controller
                        name="paterno"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Paterno"
                                error={!!errors.paterno}
                                helperText={errors.paterno?.message}
                                sx={{ width: '100%' }}
                            />
                        )}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} marginTop={1}>
                <Grid item xs={6}>
                    <Controller
                        name="materno"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Materno"
                                error={!!errors.materno}
                                helperText={errors.materno?.message}
                                sx={{ width: '100%' }}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Correo electrónico"
                                error={!!errors.email}
                                helperText={errors.email?.message}
                                sx={{ width: '100%' }}
                            />
                        )}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} marginTop={1}>
                <Grid item xs={2}>
                    <Controller
                        name="edad"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Edad"
                                error={!!errors.edad}
                                helperText={errors.edad?.message}
                                sx={{ width: '100%' }}
                                type="number"
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={3}>
                    <FormControl fullWidth>
                        <Controller
                            name="genero"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <>
                                    <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                                    <Select
                                        {...field}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Sexo"
                                        error={!!errors.email}
                                    >
                                        <MenuItem value="masculino">Masculino</MenuItem>
                                        <MenuItem value="femenino">Femenino</MenuItem>
                                        <MenuItem value="otro">Otro</MenuItem>
                                    </Select>
                                </>
                            )}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={5}>
                    <Controller
                        name="curp"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="CURP"
                                error={!!errors.curp}
                                helperText={errors.curp?.message}
                                sx={{ width: '100%' }}
                            />
                        )}
                    />
                </Grid>
            </Grid>
            <Grid container marginTop={3} sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <Grid>
                    <Button type="submit" variant="contained" color="primary">
                        <Typography>Crear Cliente</Typography>
                    </Button>
                </Grid>
                <Grid>
                    <Button variant="contained" color="primary" onClick={() => handleClose()}>
                        <Typography>Cancelar</Typography>
                    </Button>
                </Grid>
            </Grid>
        </form>
    ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <CircularProgress />
        </Box>
    );
};

FormAddClient.propTypes = {
    handleClose: PropTypes.func.isRequired,
    fetchClients: PropTypes.func.isRequired
};

export default FormAddClient;
