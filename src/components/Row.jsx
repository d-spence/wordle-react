const Row = ({ guess }) => {

  if (guess) {
    return (
      <div className="row past">
        {guess.map((letter, idx) => {
          return <div key={idx} className={letter.color}>{letter.key}</div>
        })}
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