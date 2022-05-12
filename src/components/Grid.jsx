import Row from './Row';

const Grid = ({ currentGuess, guesses, turn }) => {
  return (
    <div>
      {guesses.map((guess, idx) => {
        return <Row key={idx} guess={guess} />
      })}
    </div>
  );
}
export default Grid;