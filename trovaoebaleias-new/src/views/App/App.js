import React, { useState } from 'react'
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

const App = () => {
  const [books, setBooks] = useState(INITIAL_BOOKS)

  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/home" component={Home} />
        <Route path = '/livro/:livroId'>
          <Livro books={books} setBooks={setBooks} />
        </Route>
        <Route path = '/livros' component={() => <LivrosList books={books} />} /> 
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