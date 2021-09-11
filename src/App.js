import React, { } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, SearchPage, ButtonGuide, MusicTop50 } from './pages';
import { DirectLink, Layout } from './components'
import GlobalStyle from './style/GlobalStyle'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <DirectLink></DirectLink>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/music" component={MusicTop50} />
            <Route exact path="/search" component={SearchPage} />
            {/* <Route path="/buttonGuide" component={ButtonGuide} /> */}
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App;
 