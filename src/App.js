import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Hero, Gallery, Latest } from './components';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Gallery />
      <Latest />
      {/* <Contact /> */}
    </Router>
  );
}

export default App;
