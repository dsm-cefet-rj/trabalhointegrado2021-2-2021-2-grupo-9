import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Login, Home } from '../../views'
import { Layout } from '../../components'

import Contato from '../Contato'
// import Login from '../../pages/Loginn'

import './App.module.scss'

const App = () => {
   return (
     <Layout>
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route path = '/contato' component={Contato} />
        <Route path = '/login' component={Login} />
      </Switch>
    </Layout>
   )
};

export default App