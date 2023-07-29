import { useEffect, useState } from 'react';

import styles from './Board.module.less';

export const Board = () => {
  const [lines, setLines] = useState<string[][]>(Array(6).fill(Array(5).fill(null)));
  const [input, setInput] = useState('');

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === 'Backspace') {
        setInput((prev) => prev.slice(0, -1));
      }
      if (event.key === 'Enter') {
        console.log(event.key);
      }
      if (!/^[a-z]$/i.test(event.key)) {
        return;
      }
      if (input.length >= 5) {
        return;
      }
      setInput((prev) => prev + event.key);
    }

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [input]);

  useEffect(() => {
    console.log('current input state: ', input);
  }, [input]);

  return (
    <div className={styles.board}>
      {lines.map((line, i) => (
        <div className={styles.line} key={i}>
          {line.map((tile, j) => (
            <div className={styles.tile} key={j}>
              {tile}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
