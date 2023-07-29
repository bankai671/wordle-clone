import React from 'react';

import { Header, Board, VirtualKeyboard } from './components';

import './index.less';

export const App = () => {
  return (
    <div className='app'>
      <Header />
      <Board />
      <VirtualKeyboard />
    </div>
  );
};
