import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#0a0f23',
            paper: '#030614'
        },
        primary: {
            light: '#ecedf1',
            main: '#606d88',
            dark: '#586580'
        },
        secondary: {
            light: '#fde8ef',
            main: '#ec407a',
            dark: '#ea3a72'
        },
        success: {
            light: '#e3f8e8',
            main: '#17c13e',
            dark: '#14bb38'
        },
        error: {
            light: '#e48784',
            main: '#d9534f',
            dark: '#d54c48'
        },
        warning: {
            light: '#fdf5ea',
            main: '#f0ad4e',
            dark: '#ec9c3d'
        },
        text: {
            primary: '#e4e8f7',
            secondary: '#d5d9e9',
            disabled: '#d8ddf0'
        },
        grey: {
            50: '#070e13',
            100: '#12172f',
            200: '#ecedf1',
            300: '#b0b6c4',
            400: '#606d88',
            500: '#586580',
            600: '#44506b',
            700: '#fde8ef',
            800: '#ec407a',
            900: '#ea3a72'
        }
    }
});

export default darkTheme;

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#f0f0f0',
            paper: '#ffffff'
        },
        primary: {
            light: '#606d88',
            main: '#405074',
            dark: '#293456'
        },
        secondary: {
            light: '#f4a3b9',
            main: '#ec407a',
            dark: '#b82e5c'
        },
        success: {
            light: '#a7d7a9',
            main: '#4caf50',
            dark: '#357a38'
        },
        error: {
            light: '#f6a5a5',
            main: '#d9534f',
            dark: '#a03232'
        },
        warning: {
            light: '#f9e0b8',
            main: '#f0ad4e',
            dark: '#be8b3d'
        },
        text: {
            primary: '#303030',
            secondary: '#565656',
            disabled: '#9c9c9c'
        },
        grey: {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#eeeeee',
            300: '#e0e0e0',
            400: '#bdbdbd',
            500: '#9e9e9e',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121'
        }
    }
});
