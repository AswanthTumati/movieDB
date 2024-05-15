import React from 'react';
import { Link } from 'react-router-dom';
import './TopMovieList.scss';

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
          <h3>{movie.title}</h3>
          <p>Rating: {movie.vote_average}</p>
          <Link to={`/movie/${movie.id}?listType=${listType}`} className="view-details-button">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

const TopMovieList = ({ movies, listType }) => {
  return (
    <div className="movie-list-container">
      <div className="top-movies-info">
        <h2>Popular movies this week</h2>
      </div>
      <div className="movie-list">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} listType={listType} />
        ))}
      </div>
    </div>
  );
};

export default TopMovieList;
