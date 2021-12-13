import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home } from '../../views'
import { Layout } from '../../components'

import './App.module.scss'

const App = () => {
   return (
     <Layout>
      <Switch>
        <Route exact path="/" component={Home} /> 
      </Switch>
    </Layout>
   )
};

export default App