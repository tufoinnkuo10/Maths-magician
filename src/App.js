import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Quote from './components/QuotePage';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Homepage />
      </Route>
      <Route path="/calculator">
        <Calculator />
      </Route>
      <Route path="/quote">
        <Quote />
      </Route>
    </Switch>
  </>
);

export default App;
