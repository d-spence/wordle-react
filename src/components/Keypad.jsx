import { useState } from 'react';

const alpha = Array.from('abcdefghijklmnopqrstuvwxyz').map(l => ({'key': l}));

const Keypad = () => {
  const [letters, setLetters] = useState(alpha);

  return (
    <div className="keypad">
      {letters && letters.map((letter) => {
        return (
          <div key={letter.key}>{letter.key}</div>
        )
      })}
    </div>
  );
}
export default Keypad;