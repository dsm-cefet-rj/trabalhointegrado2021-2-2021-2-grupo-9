import { createSlice } from '@reduxjs/toolkit'

import { INITIAL_CLIENTES } from '../constants'

import { addClienteReducer } from './clientesReducer';

const slice = createSlice({
    name: 'clientes',
    initialState: INITIAL_CLIENTES,
    reducers: {
        addClient: (state, action) => addClienteReducer(state, action.payload),
    },
})

export const { addCliente } = slice.actions
export default slice.reducer