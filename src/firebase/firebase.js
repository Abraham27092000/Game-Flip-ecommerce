import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc, query, where } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.API_KEY,
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
const db = getFirestore(app)

/*
    CRUD PRODUCTOS
    CREATE
    READ
    UPDATE
    DELETE
*/

export const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"), {
            idCategoria: prod.idCategoria,
            nombre: prod.nombre,
            descripcion: prod.descripcion,
            precio: prod.precio,
            stock: prod.stock,
            img: prod.img
        })
    })
}

export const getProductos = async (categoria) => {
    const coleccionProductos= categoria ? query(collection(db, "productos"), where("idCategoria", "==", categoria)) : collection(db, "productos")
    const productos = await getDocs(coleccionProductos)
    const items = productos.docs.map(prod => {
        return { ...prod.data(), id: prod.id }
    })
    return items
}

export const getProducto = async (id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return item
}

export const updateProducto = async (id, info) => {
    await updateDoc(doc(db, "productos", id), info)
}

export const deleteProducto = async (id) => {
    await deleteDoc(doc(db, "productos", id))
}

//Create orden Compra

export const createOrdenCompra = async (cliente, productos, precioTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
        datosCliente: cliente,
        productos: productos,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    const oCompra = { ...ordenCompra.data(), id: ordenCompra.id }
    return oCompra

}