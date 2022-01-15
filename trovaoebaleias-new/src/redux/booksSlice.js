import { createSlice } from '@reduxjs/toolkit'

import { INITIAL_BOOKS } from '../constants'

import { addBookReducer, updateBookReducer, deleteBookReducer } from './booksReducer';

const slice = createSlice({
    name: 'books',
    initialState: INITIAL_BOOKS,
    reducers: {
        addBook: (state, action) => addBookReducer(state, action.payload),
        updateBook: (state, action) => updateBookReducer(state, action.payload),
        removeBook: (state, action) => deleteBookReducer(state, action.payload),
    },
})

export const { addBook, updateBook, removeBook } = slice.actions
export default slice.reducer