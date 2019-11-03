import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/header'
import LandingPage from './pages/LandingPage';
import WeeklyMenu from './pages/WeeklyMenu';
import Footer from './components/footer';
import TextLoader from './components/text-loader';
import {WeeklyMenuProvider} from './components/weekly-menu';

const App = () => (
  <TextLoader>
    <WeeklyMenuProvider>
      <Header/>
      <BrowserRouter>
        <Route exact path="/">
          <LandingPage/>
        </Route>
        <Route exact path="/dagens">
          <WeeklyMenu/>
        </Route>
      </BrowserRouter>
      <Footer/>
    </WeeklyMenuProvider>
  </TextLoader>
);

export default App;
