import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [message] = useState('Welcome!')
  const [data, setData] = useState('');

  useEffect(() => {
    document.title = `${message} Your score is ${score}`;
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setData(data.message))
      .catch(err => console.log("Oh no! ", err))
  }, [message, score]);

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
        <div className="App">
          <img src={data} alt='A random dog breed'/>
        </div>
      </header>
    </div>
  );
}

export default App;
