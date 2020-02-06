import React from 'react';
import { Router } from "@reach/router"
import { Home } from './Home/Home'
import { Upstart } from '@deanacus/upstart'

const App = () => (
  <Upstart>
    <Router>
      <Home path="/" />
    </Router>
  </Upstart>
);

export default App;
