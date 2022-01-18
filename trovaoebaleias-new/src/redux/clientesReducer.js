const addClienteReducer = (state, payload) => {
    const newCliente = { id: getCurrentGreatestIndex(state) + 1, ...payload}
    const newClienteList = [...state, newClient ]
    return newClienteList
  }

export { addClientReducer}