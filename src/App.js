import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Router as BrowserRouter, Route, Link } from 'react-router-dom';


const App = () => {  
  
  return (
    <div className="App">
      <nav>
        <h1 className="store-header">React Router Mini</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </nav>
    
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Contact" component={Contact} />
    </div>
  );
};

export default App;
  