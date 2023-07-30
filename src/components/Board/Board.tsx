import { useEffect, useState } from 'react';

import { Line } from '..';

import styles from './Board.module.less';

export const Board = () => {
  const [solution, setSolution] = useState<string>('');
  const [guesses, setGuesses] = useState<string[] | null[]>(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  useEffect(() => {
    function handleType(event: KeyboardEvent) {
      if (event.key === 'Backspace') {
        setCurrentGuess(currentGuess.slice(0, -1));
        console.log(event.key);
        return;
      }
      if (event.key === 'Enter') {
        if (currentGuess.length !== 5) {
          return;
        }
        const isCorrect = solution === currentGuess;
        if (isCorrect) {
          setIsGameOver(true);
        }
        return;
      }
      if (!/^[a-z]$/i.test(event.key) || currentGuess.length === 5) {
        return;
      }

      setCurrentGuess(currentGuess + event.key);
    }

    window.addEventListener('keydown', handleType);

    return () => window.removeEventListener('keydown', handleType);
  }, [currentGuess]);

  useEffect(() => {
    console.log(currentGuess);
  }, [currentGuess]);

  useEffect(() => {
    console.log('line: ', guesses);
  }, [guesses]);

  useEffect(() => {}, []);

  return (
    <div className={styles.board}>
      {guesses.map((line, i) => {
        const isCurrentGuess = i === guesses.findIndex((value) => value === null);
        return <Line guess={isCurrentGuess ? currentGuess : line ?? ''} />;
      })}
    </div>
  );
};
