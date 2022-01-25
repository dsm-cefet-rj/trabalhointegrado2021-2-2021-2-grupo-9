import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route , Switch } from 'react-router-dom';

import { App } from 'views';

const createCustomHistory = () => {}
const customHistory = createCustomHistory()

ReactDOM.render(
  <BrowserRouter history={customHistory}>
    <Switch>
      <Route path='/' component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
