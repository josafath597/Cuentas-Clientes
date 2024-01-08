import PropTypes from 'prop-types';
import { Box, Button, Typography, useTheme } from '@mui/material';

export const CustomPagination = ({ page, nextPage, prevPage, isLoading, lenData }) => {
    const theme = useTheme();
    return (
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', width: '100%', justifyContent: 'center', marginY: 1 }}>
            <Button variant="contained" onClick={() => prevPage()} disabled={isLoading || page < 2}>
                <Typography sx={{ color: theme.palette.grey[100], fontWeight: 700 }}>Anterior</Typography>
            </Button>
            <Typography sx={{ color: 'black', fontWeight: 700 }}>{page}</Typography>
            <Button variant="contained" onClick={() => nextPage()} disabled={isLoading || !lenData || lenData < 10}>
                <Typography sx={{ color: theme.palette.grey[100], fontWeight: 700 }}>Siguiente</Typography>
            </Button>
        </Box>
    );
};

CustomPagination.propTypes = {
    page: PropTypes.number.isRequired,
    nextPage: PropTypes.func.isRequired,
    prevPage: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    lenData: PropTypes.number.isRequired
};
