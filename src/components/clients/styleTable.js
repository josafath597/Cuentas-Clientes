export const styleTable = {
    height: '40rem',
    width: '100%',
    '& .MuiDataGrid-root': {
        border: '1px solid rgba(0, 0, 0, 0.5)',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.4)',
        backgroundColor: 'background.paper'
    },
    '& .MuiDataGrid-cell': {
        border: '1px solid rgba(0, 0, 0, 0.35)',
        borderBottom: '1px solid rgba(224, 224, 224, 1)'
    },
    '& .MuiDataGrid-columnHeaders': {
        backgroundColor: 'primary.light',
        color: 'primary.contrastText'
    },
    '& .MuiDataGrid-columnHeaderTitle': {
        fontWeight: 'bold'
    },
    '& .MuiDataGrid-row': {
        '&:hover': {
            backgroundColor: 'action.hover'
        }
    },
    '& .MuiDataGrid-footerContainer': {
        backgroundColor: '#FFAB73'
    }
};
