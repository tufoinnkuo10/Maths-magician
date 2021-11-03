import { Switch, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Header from './components/Header';
import Quote from './components/QuotePage';
import Homepage from './components/Homepage';

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
