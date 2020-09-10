import React, {useState} from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('Welcome!')

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>      
        <h1>{score}</h1>
        <button onClick={() => setScore(prevScore => prevScore + 1)}>
          Increase Score
        </button>
        <button onClick={() => setScore(prevScore => prevScore - 1)}>
          Decrease Score
        </button>
      </header>
    </div>
  );
}

export default App;
