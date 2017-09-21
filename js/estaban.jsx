import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';

// webpacking css
require("../css/main.scss");

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});
