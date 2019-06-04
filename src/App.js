import React, { Fragment } from 'react';
import './App.less'
import Header from './components/header';
import ClockSection from './components/clock-section';
import Footer from './components/footer';

const App = () => (
  <Fragment>
    <Header />
    <ClockSection />
    <Footer />
  </Fragment>
);

export default App;
