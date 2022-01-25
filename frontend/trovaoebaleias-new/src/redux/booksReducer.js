import NotFound from "../img/not_found.svg";

const getCurrentGreatestIndex = (books) => {
  const bookIds = books.map(book => +book.id)
  const sortedBookIdsDec = bookIds.sort((a, b) => b - a)
  const firstIndex = sortedBookIdsDec[0]
  return firstIndex
}

const addBookReducer = (state, payload) => {
  const nextId = getCurrentGreatestIndex(state.books) + 1
  const newBook = { id: nextId, src: NotFound, ...payload}
  const newBookList = [...state.books, newBook ]
  state.books = newBookList
}

const updateBookReducer = (state, payload) => {
  const remainingBooks = [...state.books].filter(book => book.id !== +payload.id)
  const updatedBookList = [...remainingBooks, payload ]
  state.books = updatedBookList
}

const deleteBookReducer = (state, payload) => {
  const splicedBooks = [...state.books].filter(book => book.id !== payload.id)
  state.books = splicedBooks
}

export { addBookReducer, updateBookReducer, deleteBookReducer }