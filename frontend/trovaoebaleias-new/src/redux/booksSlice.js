import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'

import { httpGet, httpPost, httpPut, httpDelete } from 'utils/client';

const baseURL = 'http://localhost:3004'

const booksAdapter = createEntityAdapter()

const initialState = booksAdapter.getInitialState({
    status: 'not_loaded',
    error: null
})

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
    return await httpGet(`${baseURL}/books`)
})

export const addBookServer = createAsyncThunk('books/addBookServer', async (book) => {
    return await httpPost(`${baseURL}/books`, book);
});

export const updateBookServer = createAsyncThunk('books/updateBookServer', async (book) => {
    return await httpPut(`${baseURL}/books/${book.id}`, book);
});

export const deleteBookServer = createAsyncThunk('books/deleteBookServer', async (bookID) => {
    await httpDelete(`${baseURL}/books/${bookID}`);
    return bookID;
});

export const slice = createSlice({
    name: 'books',
    initialState: initialState,
    extraReducers: {
        [fetchBooks.pending]: (state, action) => {state.status = 'loading'},
        [fetchBooks.fulfilled]: (state, action) => {state.status = 'loaded'; booksAdapter.setAll(state, action.payload)},
        [fetchBooks.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},

        [updateBookServer.pending]: (state, action) => {state.status = 'loading'},
        [updateBookServer.fulfilled]: (state, action) => {state.status = 'saved';booksAdapter.upsertOne(state, action.payload);},
        [updateBookServer.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},

        [addBookServer.pending]: (state, action) => {state.status = 'loading'},
        [addBookServer.fulfilled]: (state, action) => {state.status = 'saved';booksAdapter.addOne(state, action.payload);},
        [addBookServer.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},

        [deleteBookServer.pending]: (state, action) => {state.status = 'loading'},
        [deleteBookServer.fulfilled]: (state, action) => {state.status = 'deleted';booksAdapter.removeOne(state, action.payload);},
        [deleteBookServer.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
    }
})

export default slice.reducer

export const {
    selectAll: selectAllBooks,
    selectById: selectBooksById,
    selectIds: selectBooksIds
} = booksAdapter.getSelectors(state => state.books)