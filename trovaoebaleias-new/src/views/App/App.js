import React, { useReducer, useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import { 
  Cadastro,
  Livro, 
  LivrosList, 
  Login, 
  Home, 
  Contato, 
  Planos, 
  Pagamento, 
  HomeAfter,
} from 'views'
import { Layout } from 'components'

import { INITIAL_BOOKS } from '../../constants'

import './App.module.scss'

import NotFound from "../../img/not_found.svg";

const getCurrentGreatestIndex = (state) => {
  const bookIds = state.map(book => +book.id)
  const sortedBookIdsDec = bookIds.sort((a, b) => b - a)
  const firstIndex = sortedBookIdsDec[0]
  return firstIndex
}

const bookReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      const newBook = { id: getCurrentGreatestIndex(state) + 1, src: NotFound, ...action.payload}
      const newBookList = [...state, newBook ]
      return newBookList

    case 'update':
      const updatedBook = { id: action.payload.id, ...action.payload}
      const remainingBooks = state.filter(book => book.id !== +action.payload.id)
      const updatedBookList = [...remainingBooks, updatedBook ]
      return updatedBookList

    case 'delete':
      const splicedBooks = state.filter(book => book.id !== action.payload.id)
      return splicedBooks

    default:
      throw new Error()
  }

}

const App = () => {
  const [books, dispatch] = useReducer(bookReducer, INITIAL_BOOKS)
  // const [books, setBooks] = useState(INITIAL_BOOKS)

  // const removeBook = (bookId) => {
  //   const remaingBooks = books.filter(book => book.id !== bookId)
  //   setBooks(remaingBooks)
  // }

  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/home" component={Home} />
        <Route path = '/livro/:livroId'>
          <Livro books={books} dispatch={dispatch} />
        </Route>
        <Route path = '/livros'>
          <LivrosList books={books} dispatch={dispatch} />
        </Route>
        <Route path = '/login' component={Login} />
        <Route path = '/planos' component={Planos} />
        <Route path = '/cadastro' component={Cadastro} />
        <Route path = '/contato' component={Contato} />
        <Route path = '/pagamento' component={Pagamento} />
        <Route path = '/homeafter' component={HomeAfter} />
      </Switch>
    </Layout>
   )
};

export default App;