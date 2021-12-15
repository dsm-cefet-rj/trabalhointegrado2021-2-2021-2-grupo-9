import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home } from '../../views'
import { Login } from '../../views'
import { Cadastro } from '../../views'
import { Layout } from '../../components'

import Navbar from '../../components/Layout/Navbar'

import Contato from '../../pages/Contato'


import './App.module.scss'

const App = () => {
   return (
     <Layout>
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route path = '/login' component={Login} />
        <Route path = '/cadastro' component={Cadastro} />
      </Switch>
    </Layout>
   )
};

export default App;