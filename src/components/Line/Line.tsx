import React, { FunctionComponent } from 'react';

import styles from './Line.module.less';

const WORD_LENGTH = 5;

interface LineProps {
  guess: string;
  isFinal: boolean;
  solution: string;
}

export const Line: FunctionComponent<LineProps> = ({ guess, isFinal, solution }) => {
  const tiles = [];

  for (let i = 0; i < WORD_LENGTH; i++) {
    const char = guess[i];
    const classNames = [styles.tile];

    if (isFinal) {
      if (char.toUpperCase() === solution[i].toUpperCase()) {
        classNames.push(styles.correct);
      } else if (solution.includes(char || char.toUpperCase())) {
        classNames.push(styles.close);
      } else {
        classNames.push(styles.incorrect);
      }
    }

    tiles.push(
      <div key={i} className={classNames.join(' ')}>
        {char}
      </div>
    );
  }

  return <div className={styles.line}>{tiles}</div>;
};
