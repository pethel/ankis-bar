import React from 'react';
import Header from './components/header'
import Menu from './components/menu';
import Footer from './components/footer';
import Intro from './components/intro';
import TextLoader from './components/text-loader';

const App = () => (
  <TextLoader>
    <Header />
    <Intro />
    <Menu />
    <Footer />
  </TextLoader>
);

export default App;
