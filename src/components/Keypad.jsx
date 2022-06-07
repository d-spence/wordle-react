import { useState } from 'react';

const alpha = Array.from('abcdefghijklmnopqrstuvwxyz').map(l => ({'key': l}));

const Keypad = ({ usedKeys }) => {
  const [letters, setLetters] = useState(alpha);

  return (
    <div className="keypad">
      {letters && letters.map((letter) => {
        const color = usedKeys[letter.key];
        return (
          <div key={letter.key} className={color}>{letter.key}</div>
        )
      })}
    </div>
  );
}
export default Keypad;