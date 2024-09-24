import { useState } from 'react';
import './App.css';
import MovieDisplay from './Components/MovieDisplay';
import Forms from './Components/Forms';

function App() {
  const [apiKey] = useState("4d1ec9e3");
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');

  const getMovie = async (searchTerm) => {
    setError('');
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    
    const data = await response.json();
    if (data.Response === 'False') {
      setError('Movie not found!');
      setMovie(null);
    } else {
      setMovie(data);
    }
  };

  return (
    <div className="App">
      <h1>Movie Search</h1>
      <Forms getMovie={getMovie} />
      {error ? <p className="error">{error}</p> : <MovieDisplay movie={movie} />}
    </div>
  );
}

export default App;
