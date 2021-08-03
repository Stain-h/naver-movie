import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home, About, ButtonGuide } from './pages';
import { DirectLink } from './components'

function App() {
  return (
    <div className="App">
      <DirectLink></DirectLink>
      <div className="br-container">
          <BrowserRouter>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/buttonGuide" component={ButtonGuide} />
          </BrowserRouter>
      </div>
    </div>
  )
}

export default App;
 