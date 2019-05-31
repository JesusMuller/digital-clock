import React, { Fragment } from 'react';
import './App.less'
import Header from '../components/header';
import ClockSection from './clock-section';

const App = () => (
  <Fragment>
    <Header />
    <ClockSection />
  </Fragment>
);

export default App;
