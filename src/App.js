import React, { Component } from 'react';

import './App.css';
import NavBarCustom from './NavBarCustom.js';
import SandwichCreationPage from './SandwichCreationPage.js';
import IngredientsSlider from './IngredientsSlider.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarCustom />
  
        <IngredientsSlider />
      </div>
    );
  }
}

export default App;
