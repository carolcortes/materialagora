import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Details from './pages/details';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details/:id" component={Details} />
      </Switch>
    </div>
  );
}

export default App;
