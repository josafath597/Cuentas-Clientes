import { collection, getDocs, query, limit, startAfter } from 'firebase/firestore/lite';
import { FirebaseDB } from '../FirebaseApi';

export const getClients = async (pageParam = null, sizePage = 10) => {
    const queryConstraints = [limit(sizePage)];

    if (pageParam) {
        queryConstraints.push(startAfter(pageParam));
    }
    const q = query(collection(FirebaseDB, 'usuarios'), ...queryConstraints);
    const querySnapshot = await getDocs(q);
    const newLastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return { lastVisible: newLastVisible, dataClients: data };
};
