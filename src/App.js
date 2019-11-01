import React from 'react';
import './App.css';

import Tweet from './Tweet.js';

function App() {
   return (
    <div className="app">
      <Tweet name="Terminator" message="I'll be back" />
      <Tweet name="Incinerator" message="Burn" />
      <Tweet name="Rambo" message="Why you pushn me?" />
      <Tweet name="Dirty Harry" message="Make my day!" />
    </div>
  );
}

export default App;
