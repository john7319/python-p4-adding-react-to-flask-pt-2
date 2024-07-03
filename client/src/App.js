import {useEffect} from 'react';
import './App.css';

function App() {
  useEffect(() => {
    fetch('/movies')
    .then((r) => r.json())
    .then(movies => console.log(movies))
  }, []);
  return <h1>CHECK YOUR CONSOLE FOR THE MOVIE LIST!!</h1>
}

export default App;
