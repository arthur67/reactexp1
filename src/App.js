import React, { useState } from 'react';
import './App.css';

import Tweet from './Tweet.js';

function App() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  }

  return (
    <div className="app">
    <h1 className={isRed ? "red" : ""}>Change the color</h1>
    <button onClick={increment}>Increment</button>
    <h1>{count}</h1>

      {/* <Tweet name="Terminator" message="I'll be back" />
      <Tweet name="Incinerator" message="Burn" />
      <Tweet name="Rambo" message="Why you pushn me?" />
      <Tweet name="Dirty Harry" message="Make my day!" /> */}
    </div>
  );
}

export default App;
