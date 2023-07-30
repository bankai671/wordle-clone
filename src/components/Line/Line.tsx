import React, { FunctionComponent } from 'react';

import styles from './Line.module.less';

const WORD_LENGTH = 5;

interface LineProps {
  guess: string;
}

export const Line: FunctionComponent<LineProps> = ({ guess }) => {
  const tiles = [];

  for (let i = 0; i < WORD_LENGTH; i++) {
    const char = guess[i];
    tiles.push(<div key={i} className={styles.tile}>{char}</div>);
  }

  return <div className={styles.line}>{tiles}</div>;
};
