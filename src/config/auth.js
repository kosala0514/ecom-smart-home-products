import { db } from "./firebase";

import {collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc} from 'firebase/firestore';

const customersRef = collection(db,"Customers");

class CustomerService {
    addCustomer = async (newCustomer)=>{
        return await addDoc(customersRef, newCustomer);
    };
    updateCustomer = async(id, updatedCustomer) => {
        const customDoc = doc(db, "Customers", id);
        return await updateDoc(customDoc, updatedCustomer)
    }
    deleteCustomer = async (id) => {
        const customDoc = doc(db, "Customers",id);
        return await deleteDoc(customDoc);
    };
    getAllCustomers = () => {
        return getDocs(customersRef);
    }
    getCustomer = async(id) => {
        const customDoc = doc(db, "Customers", id);
        console.log("User " + getDoc(customDoc));
        return await getDoc(customDoc);
    }
}

export default new CustomerService();