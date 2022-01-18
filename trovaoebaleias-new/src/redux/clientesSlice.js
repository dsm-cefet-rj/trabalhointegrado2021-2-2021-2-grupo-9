import { addClienteReducer } from './clientesReducer';

const slice = createSlice({
    name: 'clientes',
    initialState: INITIAL_CLIENTES,
    reducers: {
        addClient: (state, action) => addClientReducer(state, action.payload),
    },
})

export const { addCliente } = slice.actions
export default slice.reducer