const getCurrentGreatestIndex = (books) => {
    const bookIds = books.map(book => +book.id)
    const sortedBookIdsDec = bookIds.sort((a, b) => b - a)
    const firstIndex = sortedBookIdsDec[0]
    return firstIndex
  }

const addClientReducer = (state, payload) => {
    const newCliente = { id: getCurrentGreatestIndex(state) + 1, ...payload}
    const newClienteList = [...state, newCliente ]
    return newClienteList
  }

export { addClientReducer} 