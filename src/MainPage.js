import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SandwichCreationPage from './SandwichCreationPage.js';


const MainPage = () => {
  return (
    <div>
      <h1>SIT</h1>
      <Link to="/SandwichCreationPage">
        <Button >LINK</Button>
      </Link>
      
    </div>
  );
}

export default MainPage;
