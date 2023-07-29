import React from 'react';

import { Game } from './components';

import './index.css';

export const App = () => {
  return (
    <div className='app'>
      <h1 className='app-title'>Worlde</h1>
      <Game />
    </div>
  );
};
