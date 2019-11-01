import React , { useState } from 'react';
import "./App.css"

function Tweet({name,message}) {
    const [likes, setLikes] = useState(0);
    return (
        <div className="tweet" onClick={() => setLikes(likes + 1)}>
            <h3>{name}</h3>
            <p>{message}</p>
            <h3>Number of likes: {likes}</h3>
        </div>
    );
}

export default Tweet;