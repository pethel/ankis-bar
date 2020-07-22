import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/header'
import LandingPage from './pages/LandingPage';
import Footer from './components/footer';
import TextLoader from './components/text-loader';

const App = () => (
  <TextLoader>
    <Header/>
    <BrowserRouter>
      <main>
        <Route exact path="/">
          <LandingPage/>
        </Route>
      </main>
    </BrowserRouter>
    <Footer/>
  </TextLoader>
);

export default App;
