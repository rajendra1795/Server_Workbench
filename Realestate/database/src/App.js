import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';

import Home from './Home';
import Navbar from './Navbar';
import AccountType from './AccountType';
import CommissionEntry from './CommissionEntry';
import Dummy  from './Dummy';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
        <Route path = "/" component = {Home} />
        <Route path ="/AccountType" component = {AccountType} />
        <Route path = "/CommissionEntry" component = {CommissionEntry} />
        <Route path = "/Dummy" component = {Dummy} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;