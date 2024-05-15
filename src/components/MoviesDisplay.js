import React from 'react';
import { Link } from 'react-router-dom';
import './MoviesDisplay.scss';

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const Movie = ({ movie, listType }) => {
  return (
    <div className="movie">
      <div className="movie-left">
        <Link to={`/movie/${movie.id}?listType=${listType}`} className="movie-link">
          <img src={API_IMG + movie.poster_path} alt="movie poster" />
        </Link>
      </div>
      <div className="movie-right">
        <div className="movie-info">
          <h3>Title : {movie.title}</h3>
          <p>vote_average: {movie.vote_average}</p>
          <Link to={`/movie/${movie.id}?listType=${listType}`} className="view-details-button">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

const MoviesDisplay = ({ movies, listType }) => {
  return (
    <div className="movie-list-container">
      <div className="top-movies-info">
        
      </div>
      <div className="movie-list">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} listType={listType} />
        ))}
      </div>
    </div>
  );
};

export default MoviesDisplay;
