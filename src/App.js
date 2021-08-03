import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home, About, ButtonGuide } from './pages/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/buttonGuide" component={ButtonGuide} />
      </BrowserRouter>
    </div>
  )
}

export default App;
 