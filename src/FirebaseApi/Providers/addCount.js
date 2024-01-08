import { collection, addDoc, updateDoc, doc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../FirebaseApi';

export const addCount = async (data) => {
    try {
        await addDoc(collection(FirebaseDB, 'cuentas'), { cuenta: data.cuenta, cliente: data.cliente });
        const docClientRef = doc(FirebaseDB, 'usuarios', data.idCliente);
        await updateDoc(docClientRef, {
            hasClient: true,
            cuenta: data.cuenta
        });
    } catch (error) {
        console.error('Error al agregar el documento: ', error);
        throw new Error(error.message);
    }
};
