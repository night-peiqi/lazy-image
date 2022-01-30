import React from 'react';
import LazyImage from 'lib';
import classes from './App.module.css';

const App = () => (
  <div className={classes.container}>
    <LazyImage
      src="https://img.kaikeba.com/30155111102202dcbz.png"
      defaultimg="https://img.kaikeba.com/30155111102202dcbz.png"
    />
  </div>
);

export default App;
