import React from 'react';
import PropTypes from 'prop-types';
import { styleTable } from './styleTable';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { columnsAccounts } from '../../utils/columns';

const TableAccounts = ({ accounts, isLoadingAccounts }) => {
    console.log(accounts, isLoadingAccounts);
    return (
        <Box sx={styleTable}>
            <DataGrid
                rows={accounts}
                columns={columnsAccounts}
                loading={isLoadingAccounts}
                disableColumnMenu
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10
                        }
                    }
                }}
                pageSizeOptions={[100]}
            />
        </Box>
    );
};

TableAccounts.propTypes = {
    accounts: PropTypes.array.isRequired,
    isLoadingAccounts: PropTypes.bool.isRequired
};

export default TableAccounts;
