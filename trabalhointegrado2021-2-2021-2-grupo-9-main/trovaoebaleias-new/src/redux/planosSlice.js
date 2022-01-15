import { createSlice } from '@reduxjs/toolkit'

import { INITIAL_PLANOS } from '../constants'

import { addPlanoReducer, updatePlanoReducer, deletePlanoReducer } from './planosReducer';

const slice = createSlice({
    name: 'planos',
    initialState: INITIAL_PLANOS,
    reducers: {
        addPlano: (state, action) => addPlanoReducer(state, action.payload),
        updatePlano: (state, action) => updatePlanoReducer(state, action.payload),
        removePlano: (state, action) => deletePlanoReducer(state, action.payload),
    },
})

export const { addPlano, updatePlano, removePlano } = slice.actions
export default slice.reducer