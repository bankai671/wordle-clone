import React, { useEffect, useState } from 'react';

import styles from './Board.module.css';

const BOARD_SCELETON = Array.from({ length: 6 }, () => Array(5).fill(0));

export const Board = () => {
  const [board, setBoard] = useState(BOARD_SCELETON);

  useEffect(() => {
    console.log(board);
  }, []);

  return (
    <div className={styles.board}>
      {board.map((row, y) => (
        <div className={styles.row}>
          {row.map((square, x) => (
            <div className={styles.square}>
              {y} - {x}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
