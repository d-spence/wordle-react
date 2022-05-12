import Row from './Row';

const Grid = ({ currentGuess, guesses, turn }) => {
  return (
    <div>
      {guesses.map((guess, idx) => {
        return <Row key={idx} />
      })}
    </div>
  );
}
export default Grid;