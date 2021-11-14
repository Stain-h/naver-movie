import React, { } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import MusicTop50 from './pages/MusicTop50';
import ButtonGuide from './pages/ButtonGuide';
import Layout from './components/layout/Layout'
import DirectLink from './components/common/DirectLink'
import GlobalStyle from './style/GlobalStyle'
import './css/style.scss'

function App() {
  return (
    <>
      <GlobalStyle />
      <DirectLink></DirectLink>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/music" component={MusicTop50} />
            <Route path="/search" component={SearchPage} />
            {/* <Route path="/buttonGuide" component={ButtonGuide} /> */}
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App;
 