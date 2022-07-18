import { db } from "./firebase";

import {collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc} from 'firebase/firestore';

const productsRef = collection(db,"Products");

class ProductsService {
    getAllProducts = () => {
        return getDocs(productsRef);
    }
}

export default new ProductsService();