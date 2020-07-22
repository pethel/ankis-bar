import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/header'
import LandingPage from './pages/LandingPage';
import Footer from './components/footer';
import TextLoader from './components/text-loader';
import {SkipLink} from './components/skip-link';

const mainId = 'main'

const App = () => (
  <TextLoader>
    <SkipLink mainId={mainId}/>
    <Header/>
    <BrowserRouter>
      <main>
        <Route exact path="/">
          <LandingPage mainId={mainId}/>
        </Route>
      </main>
    </BrowserRouter>
    <Footer/>
  </TextLoader>
);

export default App;
