import { collection, getFirestore } from "firebase/firestore";
import { app } from "./firebase";

export const firestore = getFirestore(app)

//PRODUTOS OCLLECTION

export const produtosCollection = collection(firestore, 'produtos');