import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'

//import { INITIAL_BOOKS } from '../constants'
import { httpGet, httpPut } from 'utils/client';
import { addBookReducer, updateBookReducer, deleteBookReducer } from './booksReducer';

const baseURL = 'http://localhost:3004'

const booksAdapter = createEntityAdapter()

const initialState = booksAdapter.getInitialState({
    status: 'not_loaded',
    error: null
})

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
        return await httpGet(`${baseURL}/books`)
    }
)

export const updateBookServer = createAsyncThunk('books/updateBookServer', async (book) => {
    return await httpPut(`${baseURL}/books/${book.id}`, book);
});

export const slice = createSlice({
    name: 'books',
    initialState: initialState,
    reducers: {
        addBook: (state, action) => addBookReducer(state, action.payload),
        updateBook: (state, action) => updateBookReducer(state, action.payload),
        removeBook: (state, action) => deleteBookReducer(state, action.payload),
    },
    extraReducers: {
        [fetchBooks.pending]: (state, action) => {state.status = 'loading'},
        [fetchBooks.fulfilled]: (state, action) => {state.status = 'loaded'; booksAdapter.setAll(state, action.payload)},
        [fetchBooks.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
        [updateBookServer.pending]: (state, action) => {state.status = 'loading'},
        [updateBookServer.fulfilled]: (state, action) => {state.status = 'saved';booksAdapter.upsertOne(state, action.payload);},
    }
})

export const { addBook, updateBook, removeBook } = slice.actions
export default slice.reducer

export const {
    selectAll: selectAllBooks,
    selectById: selectBooksById,
    selectIds: selectBooksIds
} = booksAdapter.getSelectors(state => state.books)