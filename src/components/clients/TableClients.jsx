import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { columns } from '../../utils/columns';
import { CustomPagination } from '../../utils/CustomPagination';
import { styleTable } from './styleTable';

const TableClients = ({ data, isLoading, page, nextPage, prevPage }) => (
    <Box sx={styleTable}>
        <DataGrid
            rows={data}
            columns={columns}
            loading={isLoading}
            initialState={{
                pagination: {
                    paginationModel: {
                        pageSize: 10
                    }
                }
            }}
            disableColumnMenu
            pageSizeOptions={[10]}
            slots={{
                pagination: CustomPagination
            }}
            slotProps={{
                pagination: { page, nextPage, prevPage, isLoading, lenData: data.length }
            }}
        />
    </Box>
);

TableClients.propTypes = {
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    page: PropTypes.number.isRequired,
    nextPage: PropTypes.func.isRequired,
    prevPage: PropTypes.func.isRequired
};

export default TableClients;
