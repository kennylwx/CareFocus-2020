import React from 'react';
import './styles/app.scss';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Checkup from './pages/Checkup';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      {/* General */}
      <Route path="/checkup" component={Checkup} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/home" component={HomePage} />
      <Route path="/login" component={Login} />

      <Route component={Login} />
    </Switch>
  </BrowserRouter>
 
  );
}

export default App;
