import { useState } from 'react';

function App() {
  let [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
  };
  if (counter === 10) return null;

  return (
    <div>
      <input type="text" value={counter} />
      <br />
      <input type="button" onClick={increase} value="Incrementar" />
    </div>
  );
}

export default App;
