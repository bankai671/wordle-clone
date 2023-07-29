import React from 'react';

import { Header, Board, VirtualKeyboard } from './components';

import './index.css';

export const App = () => {
  return (
    <div className='app'>
      <Header />
      <Board />
      <VirtualKeyboard />
    </div>
  );
};
