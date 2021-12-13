import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Loginn from './pages/Loginn'

function App() {
    
    return (
        <>
        <main>
          <Switch>
            <Route path = '/home' component={Home} />
            <Route path = '/contato' component={Contato} />
            <Route path = '/loginn' component={Loginn} />
          </Switch>
        </main>
        </>
    )
}

export default App;