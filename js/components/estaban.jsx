import React from 'react';

import Weather from './weather';
import Clock from './clock';
import Countdown from './countdown';
import Greeting from './greeting';

const Estaban = () => {

  return (
    <div className="app">
      <Greeting />

    </div>
  );
};

export default Estaban;

// <Clock location="california"/>
// <Weather location="fremont"/>
// <Countdown />
// <Weather location="mishawaka"/>
// <Clock location="indiana" />
