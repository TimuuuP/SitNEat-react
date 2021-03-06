import React, { Component } from 'react';
import ham1 from './images/Asset5.svg';
import ham2 from './images/Asset 10.svg';
import './App.css';
import NavBarCustom from './NavBarCustom.js';
import SandwichCreationPage from './SandwichCreationPage.js';
import Button from '@material-ui/core/Button';
import MainPage from './MainPage.js';
import MainLayout from './MainLayout.js';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';



class App extends Component {
  render() {
    return (

      <Router>
        <div className="mainApp">
        <NavBarCustom />
        <Switch>
          <Route
            exact path="/"
            layout={MainLayout}
            component={MainPage}>
          </Route>

          <Route
            exact path="/SandwichCreationPage"
            component={SandwichCreationPage}>
          </Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
