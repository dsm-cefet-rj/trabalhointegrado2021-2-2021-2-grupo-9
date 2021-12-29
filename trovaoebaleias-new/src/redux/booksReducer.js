import NotFound from "../img/not_found.svg";

const getCurrentGreatestIndex = (state) => {
  const bookIds = state.map(book => +book.id)
  const sortedBookIdsDec = bookIds.sort((a, b) => b - a)
  const firstIndex = sortedBookIdsDec[0]
  return firstIndex
}

const addBookReducer = (state, payload) => {
  const newBook = { id: getCurrentGreatestIndex(state) + 1, src: NotFound, ...payload}
  const newBookList = [...state, newBook ]
  return newBookList
}

const updateBookReducer = (state, payload) => {
  const updatedBook = { id: payload.id, ...payload}
  const remainingBooks = [...state].filter(book => book.id !== +payload.id)
  const updatedBookList = [...remainingBooks, updatedBook ]
  return updatedBookList
}

const deleteBookReducer = (state, payload) => {
  const splicedBooks = [...state].filter(book => book.id !== payload.id)
  return splicedBooks
}

export { addBookReducer, updateBookReducer, deleteBookReducer }