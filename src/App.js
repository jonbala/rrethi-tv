import React from 'react';

import { AboutUs, Chef, SecondChef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Chef />
    <SecondChef />
    <Intro />
    <Gallery />
    <Footer />
  </div>
);

export default App;

