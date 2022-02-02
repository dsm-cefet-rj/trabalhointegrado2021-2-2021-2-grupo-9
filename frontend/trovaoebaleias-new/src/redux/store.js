import { configureStore } from "@reduxjs/toolkit";
import booksReducer from './booksSlice'
import clientesReducer from './clientesSlice'
import planosReducer from './clientesSlice'

const store = configureStore({
    reducer: {
        books: booksReducer,
        clientes: clientesReducer,
        planos: planosReducer,
    }
})

export default store