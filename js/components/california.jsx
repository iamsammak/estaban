import React from 'react';

import Weather from './weather';
import Clock from './clock';

const California = () => {
  return (
    <div>
      <Clock location="california"/>
      <Weather />
    </div>
  );
};

export default California;
