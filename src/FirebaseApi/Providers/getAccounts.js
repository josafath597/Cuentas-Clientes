import { collection, getDocs, query } from 'firebase/firestore/lite';
import { FirebaseDB } from '../FirebaseApi';

export const getAccounts = async () => {
    const q = query(collection(FirebaseDB, 'cuentas'));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return data;
};
