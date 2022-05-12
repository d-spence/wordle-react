import { useEffect } from 'react';
import useWordle from '../hooks/useWordle';

const Wordle = ({ solution }) => {
  const { currentGuess, handleKeyUp, guesses, isCorrect, turn } = useWordle(solution);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => window.removeEventListener('keyup', handleKeyUp);
  }, [handleKeyUp]);

  useEffect(() => {
    console.log({ guesses, turn, isCorrect });
  }, [guesses, turn, isCorrect]);

  return (
    <div>
      <div>Solution = {solution}</div>
      <div>Current Guess = {currentGuess}</div>
    </div>
  );
}

export default Wordle;