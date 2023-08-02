import { useEffect, useState } from 'react';

import { Line } from '..';

import styles from './Board.module.less';

const API_URL = 'words.json';

export const Board = () => {
  const [solution, setSolution] = useState<string>('');
  const [guesses, setGuesses] = useState<string[]>(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [validGuesses, setValidGuesses] = useState<string[]>([]);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  useEffect(() => {
    async function fetchWord() {
      const response = await fetch(API_URL);
      const words = await response.json();
      const randomWord = words[Math.floor(Math.random() * words.length)];
      setValidGuesses(words);
      setSolution(randomWord);
    }

    fetchWord();
  }, []);

  useEffect(() => {
    function handleType(event: KeyboardEvent) {
      if (isGameOver) {
        return;
      }

      if (event.key === 'Backspace') {
        setCurrentGuess(currentGuess.slice(0, -1));
        return;
      }

      if (event.key === 'Enter') {
        if (currentGuess.length !== 5) {
          return;
        }
        if (currentGuess.length === 5 && !validGuesses.includes(currentGuess)) {
          return;
        }

        const newGuesses = Array.from(guesses);
        newGuesses[guesses.findIndex((value) => value === null)] = currentGuess;
        setGuesses(newGuesses);
        setCurrentGuess('');

        if (solution === currentGuess) {
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
  }, [currentGuess, isGameOver, solution, guesses]);

  return (
    <div className={styles.board}>
      {guesses.map((guess, i) => {
        const isCurrentGuess = i === guesses.findIndex((value) => value === null);
        return (
          <Line
            guess={isCurrentGuess ? currentGuess : guess ?? ''}
            isFinal={!isCurrentGuess && guess !== null}
            solution={solution}
            key={String(guess) + i}
          />
        );
      })}
    </div>
  );
};
