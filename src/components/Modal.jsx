const Modal = ({ isCorrect, turn, solution }) => {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className="solution">{solution}</p>
          <p>You found the solution in {turn} guesses :)</p>
          <span className="retry" onClick={() => window.location.reload()}>Click to try again!</span>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Nevermind!</h1>
          <p className="solution">{solution}</p>
          <p>Better luck next time :(</p>
          <span className="retry" onClick={() => window.location.reload()}>Click to try again!</span>
        </div>
      )}
    </div>
  );
}

export default Modal;