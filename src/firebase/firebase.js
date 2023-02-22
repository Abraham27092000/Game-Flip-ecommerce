import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc,} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBx2Rw9XbkWYPNvFnxnOlI6F_Ab4mECTfY",
    authDomain: "react-39530.firebaseapp.com",
    projectId: "react-39530",
    storageBucket: "react-39530.appspot.com",
    messagingSenderId: "364180799087",
    appId: "1:364180799087:web:de976455efb240b56b979a",
    measurementId: "G-6V7R0SCNCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Consultar la BDD
const db = getFirestore() 

/*
    CRUD PRODUCTOS
    CREATE
    READ
    UPDATE
    DELETE
*/

export const cargarBDD = async () => {
    const promise = await fetch ('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) =>{
        await addDoc (collection(db, "productos"),{
            idCategoria: prod.idCategoria,
            nombre: prod.nombre,
            descripcion: prod.descripcion,
            precio: prod.precio,
            stock: prod.stock,
            img: prod.img
        })
    })
}   