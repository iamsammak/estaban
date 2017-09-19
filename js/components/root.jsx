import React from 'react';

import Weather from './weather';
import Clock from './clock';

const Root = ({ store }) => {
  return(
    <div>
      <Clock />
      <Weather />
    </div>
  );
};

export default Root;
