const getCurrentGreatestIndex = (state) => {
  const clienteIds = state.map(cliente => +cliente.id)
  const sortedClienteIdsDec = clienteIds.sort((a, b) => b - a)
  const firstIndex = sortedClienteIdsDec[0]
  return firstIndex
}

const addClienteReducer = (state, payload) => {
    const newCliente = { id: getCurrentGreatestIndex(state) + 1, ...payload}
    const newClienteList = [...state, newCliente ]
    return newClienteList
  }

export { addClienteReducer }