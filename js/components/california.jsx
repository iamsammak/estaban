import React from 'react';

import Weather from './weather';
import Clock from './clock';
import Countdown from './countdown';

const California = () => {
  return (
    <div className="app">
      <Clock location="california"/>
      <Weather />
      <Countdown />
      <Weather />
      <Clock location="indiana" />
    </div>
  );
};

export default California;
