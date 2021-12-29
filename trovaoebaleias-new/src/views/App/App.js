import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux';

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

import { store } from '../../redux'

import './App.module.scss'

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/home" component={Home} />
          <Route path = '/livro/:livroId' component={Livro} />
          <Route path = '/livros' component={LivrosList} />
          <Route path = '/login' component={Login} />
          <Route path = '/planos' component={Planos} />
          <Route path = '/cadastro' component={Cadastro} />
          <Route path = '/contato' component={Contato} />
          <Route path = '/pagamento' component={Pagamento} />
          <Route path = '/homeafter' component={HomeAfter} />
        </Switch>
      </Layout>
    </Provider>
   )
};

export default App;