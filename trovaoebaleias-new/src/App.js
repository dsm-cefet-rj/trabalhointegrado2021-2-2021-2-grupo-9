import React from 'react'
import {Switch, Route} from 'react-router-dom'

import { Home } from '../../views'
import { Layout } from '../../components'

import Contato from './pages/Contato'
import Login from './pages/Login'

import './App.module.scss'

function App() {
  return (
      <>
      <Layout>
        <Switch>
          <Route exact path = '/' component={Home} />
          <Route path = '/contato' component={Contato} />
          <Route path = '/login' component={Login} />
        </Switch>
      </Layout>
      </>
  )
}

export default App;