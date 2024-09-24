import React from 'react';

function MovieDisplay({ movie }) {
  return (
    <div className="movie-container">
      {movie ? (
        <div>
          <h2>{movie.Title}</h2>
          <p><strong>Released:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      ) : (
        <p>Search for a movie!</p>
      )}
    </div>
  );
}

export default MovieDisplay;
