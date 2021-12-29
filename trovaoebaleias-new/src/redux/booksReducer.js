import { INITIAL_BOOKS } from '../constants'

import NotFound from "../img/not_found.svg";

const getCurrentGreatestIndex = (state) => {
  const bookIds = state.map(book => +book.id)
  const sortedBookIdsDec = bookIds.sort((a, b) => b - a)
  const firstIndex = sortedBookIdsDec[0]
  return firstIndex
}

const booksReducer = (state = INITIAL_BOOKS, action) => {
  switch (action.type) {
    case 'add':
      const newBook = { id: getCurrentGreatestIndex(state) + 1, src: NotFound, ...action.payload}
      const newBookList = [...state, newBook ]
      return newBookList

    case 'update':
      const updatedBook = { id: action.payload.id, ...action.payload}
      const remainingBooks = [...state].filter(book => book.id !== +action.payload.id)
      const updatedBookList = [...remainingBooks, updatedBook ]
      return updatedBookList

    case 'delete':
      const splicedBooks = [...state].filter(book => book.id !== action.payload.id)
      return splicedBooks

    default:
      return state
  }
}

export { booksReducer }