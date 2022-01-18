import { configureStore } from "@reduxjs/toolkit";
import booksReducer from './booksSlice'
import clientesReducer from './clientesSlice'

const store = configureStore({
    reducer: {
        books: booksReducer,
        clientes: clientesReducer
    }
})

export default store