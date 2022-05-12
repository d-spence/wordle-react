const Row = ({ guess, currentGuess }) => {
  if (guess) {
    return (
      <div className="row past">
        {guess.map((letter, idx) => (
          <div key={idx} className={letter.color}>{letter.key}</div>
        ))}
      </div>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split('');

    return (
      <div className="row current">
        {letters.map((letter, idx) => (
          <div key={idx} className="filled">{letter}</div>
        ))}
        {[...Array(5 - letters.length)].map((value, idx) => (
          <div key={idx}></div>
        ))}
      </div>
    );
  }

  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
export default Row;