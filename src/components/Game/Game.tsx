import React from 'react';

import { Board, VirtualKeyboard } from '..';

import styles from './Game.module.css';

export const Game = () => {
  return (
    <div className={styles.game}>
      <Board />
      <VirtualKeyboard />
    </div>
  );
};
