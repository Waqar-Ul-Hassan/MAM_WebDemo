import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/';
import About from './Components/Pages/About';
import Events from './Components/Pages/Events';
import ContactUs from './Components/Pages/ContactUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/About' exact component={About} />
        <Route path='/Events' exact component={Events} />
        <Route path='/contact-us' exact component={ContactUs} />
      </Switch>
    </Router>
  );
}

export default App;
