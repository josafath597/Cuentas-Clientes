import { collection, addDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../FirebaseApi';

export const addClient = async (data) => {
    try {
        const docRef = await addDoc(collection(FirebaseDB, 'usuarios'), data);
        return docRef.id;
    } catch (error) {
        console.error('Error al agregar el documento: ', error);
        throw new Error(error.message);
    }
};
