import { createSlice } from '@reduxjs/toolkit'

import { addClientReducer } from './clientesReducer';

import { INITIAL_CLIENTES } from '../constants'

const slice = createSlice({
    name: 'clientes',
    initialState: INITIAL_CLIENTES,
    reducers: {
        addClient: (state, action) => addClientReducer(state, action.payload),
    },
})

export const { addCliente } = slice.actions
export default slice.reducer 