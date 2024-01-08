import { useEffect, useState } from 'react';
import { getAccounts } from '../FirebaseApi/Providers/getAccounts';

export const useGetAccounts = () => {
    const [isLoadingAccounts, setIsLoadingAccounts] = useState(false);
    const [accounts, setAccounts] = useState([]);

    const fetchAccounts = async () => {
        try {
            setIsLoadingAccounts(true);
            const data = await getAccounts();
            setAccounts(data);
        } catch (error) {
            console.error('Error fetching accounts:', error);
        } finally {
            setIsLoadingAccounts(false);
        }
    };
    useEffect(() => {
        fetchAccounts();
    }, []);
    return {
        isLoadingAccounts,
        accounts
    };
};
