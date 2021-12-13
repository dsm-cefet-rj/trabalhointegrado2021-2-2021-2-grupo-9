import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home } from '../../views'
import { Layout } from '../../components'

import Contato from '../../pages/Contato'
// import Login from '../../pages/Loginn'

import './App.module.scss'

const App = () => {
   return (
     <Layout>
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route path = '/contato' component={Contato} />
      </Switch>
    </Layout>
   )
};

export default App