import { useEffect, useState } from 'react';
import { getClients } from '../FirebaseApi/Providers/getClients';

export const useGetClients = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [clientsDocuments, setClientsDocuments] = useState([]);
    const [clients, setClients] = useState([]);
    const [page, setPage] = useState(1);

    const fetchClients = async () => {
        try {
            setIsLoading(true);
            const { dataClients, lastVisible } = await getClients(null, 10);
            setClients(dataClients);
            setClientsDocuments([lastVisible]);
            setPage(1);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const nextPage = async () => {
        try {
            console.log(clientsDocuments);
            setIsLoading(true);
            const { dataClients, lastVisible } = await getClients(clientsDocuments[page - 1], 10);
            setClients(dataClients);
            setClientsDocuments((prev) => [...prev, lastVisible]);
            setPage((prevPage) => prevPage + 1);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const prevPage = async () => {
        if (page > 1) {
            try {
                setIsLoading(true);
                const lastDocument = page < 3 ? null : clientsDocuments[page - 3];
                const { dataClients } = await getClients(lastDocument, 10);
                setClients(dataClients);
                setClientsDocuments((prev) => prev.slice(0, -1));
                setPage((prevPage) => Math.max(prevPage - 1, 1));
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        fetchClients();
    }, []);

    return {
        isLoading,
        clients,
        page,
        // Metodos
        nextPage,
        prevPage,
        fetchClients
    };
};
