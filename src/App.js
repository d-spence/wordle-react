import { useState, useEffect } from "react";

const dbUrl = 'http://localhost:3001/solutions';

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch(dbUrl)
      .then(res => res.json())
      .then(json => {
        const randomSolution = json[Math.floor(Math.random() * json.length) + 1];
        setSolution(randomSolution.word);
      });
  }, [setSolution]);

  return (
    <div className="">
      <h1>Wordle</h1>
      {solution && <div>Solution is: {solution}</div>}
    </div>
  );
}

export default App;
