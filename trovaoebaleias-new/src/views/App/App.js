import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Cadastro, Login, Home, Planos } from 'views'
import { Layout } from '../../components'

import './App.module.scss'

const App = () => {
   return (
     <Layout>
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/home" component={Home} /> 
        <Route path = '/login' component={Login} />
        <Route path = '/planos' component={Planos} />
        <Route path = '/cadastro' component={Cadastro} />
      </Switch>
    </Layout>
   )
};

export default App;