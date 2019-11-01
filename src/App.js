import React, { useState } from 'react';
import './App.css';

import Tweet from './Tweet.js';

function App() {

  const [users, setUsers] = useState([
    { name: "Terminator" ,  message: "Terminator" },
    { name: "Incinerator" , message: "Burn" },
    { name: "Rambo" ,       message: "Why you pushn me?" },
    { name: "Dirty Harry" , message: "Make my day!" },
  ]);

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  }

  return (
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;
