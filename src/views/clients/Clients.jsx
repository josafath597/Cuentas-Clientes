import { Grid } from '@mui/material';
import { useGetAccounts, useGetClients } from '../../hooks';
import { useState } from 'react';
import { HeaderButtons, ModalAddAccount, ModalAddClient, TableAccounts, TableClients } from '../../components/clients';

const Clients = () => {
    const { isLoading, clients, page, nextPage, prevPage, fetchClients } = useGetClients();
    const { isLoadingAccounts, accounts } = useGetAccounts();
    const [isViewTableClients, setIsViewTableClients] = useState(true);
    return (
        <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 1 }}>
            <Grid item>
                <HeaderButtons isViewTableClients={isViewTableClients} setIsViewTableClients={setIsViewTableClients} />
            </Grid>
            <Grid item sx={{ display: 'flex', gap: 2 }}>
                <ModalAddClient fetchClients={fetchClients} isLoading={isLoading} />
                <ModalAddAccount fetchClients={fetchClients} isLoading={isLoading} clients={clients} />
            </Grid>
            <Grid item>
                {isViewTableClients ? (
                    <TableClients data={clients} isLoading={isLoading} page={page} nextPage={nextPage} prevPage={prevPage} />
                ) : (
                    <TableAccounts isLoadingAccounts={isLoadingAccounts} accounts={accounts} />
                )}
            </Grid>
        </Grid>
    );
};

export default Clients;
