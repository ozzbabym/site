import React from 'react';
import './App.css';
import Contact from './components/contact';
import Face from './components/face';
import Footer from './components/footer';
import { Route } from "react-router-dom";
import Data from './components/data';

function App() {
  return (
  
    <div className="App">
      <Face />
      <Contact />
      
      <Route path="/Contact" render={() => <Data />} />
      <Route path="/Video" render={() => <Footer />} />
    </div>
  );
}

export default App;
