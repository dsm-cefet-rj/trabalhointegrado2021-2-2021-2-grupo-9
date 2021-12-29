import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from 'hooks'

const store = configureStore({
    reducer: {
        books: booksReducer
    }
})

export { store }