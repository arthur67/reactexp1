import React, { useState } from 'react';
import './App.css';

import Tweet from './Tweet.js';

function App() {

  const [users, setUsers] = useState([
    { name: "Terminator" ,  message: "I'll be back!" },
    { name: "Incinerator" , message: "Burn" },
    { name: "Rambo" ,       message: "Why you pushn me?" },
    { name: "Dirty Harry" , message: "Make my day!" },
  ]);

  return (
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;
