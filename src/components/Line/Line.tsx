import { FunctionComponent, useState } from 'react';

import { Tile } from '..';

import styles from './Line.module.less';

interface LineProps {
  guess: string;
  isFinal: boolean;
  solution: string;
  lineClassName: string;
}

export const Line: FunctionComponent<LineProps> = ({
  guess,
  isFinal,
  solution,
  lineClassName,
}) => {
  const tiles = Array(5).fill(null);
  const lineClassNames = [styles.line, styles[lineClassName]];

  return (
    <div className={lineClassNames.join(' ')}>
      {tiles.map((tile, i) => {
        const char = guess[i];
        let className = '';

        if (isFinal) {
          if (char.toUpperCase() === solution[i].toUpperCase()) {
            className = 'correct';
          } else if (solution.includes(char || char.toUpperCase())) {
            className = 'close';
          } else {
            className = 'incorrect';
          }
        }

        return (
          <Tile
            char={char}
            validationClassName={className}
            isFinal={isFinal}
            key={i}
          />
        );
      })}
    </div>
  );
};
