import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { INITIAL_BOOKS } from '../constants'

import { addBookReducer, updateBookReducer, deleteBookReducer } from './booksReducer';

export const fetchBooks = createAsyncThunk('books/fetchBooks', 
    async () => {
        return await (await fetch('http://localhost:3004/books')).json()
    }
)

const fullfillBooksReducer = (booksState, booksFetched) => {
    booksState.status = 'loaded'
    booksState.books = booksFetched
}

const slice = createSlice({
    name: 'books',
    initialState: INITIAL_BOOKS,
    reducers: {
        addBook: (state, action) => addBookReducer(state, action.payload),
        updateBook: (state, action) => updateBookReducer(state, action.payload),
        removeBook: (state, action) => deleteBookReducer(state, action.payload),
    },
    extraReducers: {
        [fetchBooks.pending]: (state, action) => {state.status = 'loading'},
        [fetchBooks.fulfilled]: (state, action) => fullfillBooksReducer(state, action.payload),
        [fetchBooks.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
    }
})

export const { addBook, updateBook, removeBook } = slice.actions
export default slice.reducer