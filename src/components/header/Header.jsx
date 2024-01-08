import { AppBar, Container, Toolbar, Typography } from '@mui/material';

export const Header = () => (
    <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Typography
                    variant="h4"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        color: 'inherit',
                        textDecoration: 'none',
                        textAlign: 'center',
                        width: '100%'
                    }}
                >
                    Clientes & Cuentas
                </Typography>
            </Toolbar>
        </Container>
    </AppBar>
);
