import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import './TopMovieList.scss';
import { useDispatch } from 'react-redux';

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const Movie = ({ movie, listType }) => {
  const dispatch = useDispatch();
  console.log('movie sending to watchlist', movie, typeof movie)

  

  return (
    <div className='movie'>
      <Link to={`/movie/${movie.id}?listType=${listType}`} className="movie-link">
        <img src={API_IMG + movie.poster_path} alt='movie poster' />
      </Link>
    </div>
  );
};

const TopRatedMoviesList = ({ movies, listType }) => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const movieListRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    const newScrollLeft = scrollLeft + scrollOffset;
    if (newScrollLeft >= 0 && movieListRef.current) {
      movieListRef.current.scrollLeft = newScrollLeft;
      setScrollLeft(newScrollLeft);
    }
  };

  return (
    <div className="movie-list-container">
      <div className="movies-wrapper">
        <div className="top-movies-info">
          <h2>Top rated movies</h2>
          {/*<p>Check out this week’s most popular movies and find out where to watch them.</p>*/}
        </div>
        <div className="movie-list" ref={movieListRef}>
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} listType={listType}/>
          ))}
        </div>
      </div>
      <div className="navigation-arrows">
        <button className="arrow left" onClick={() => handleScroll(-250)}>&lt;</button>
        <button className="arrow right" onClick={() => handleScroll(250)}>&gt;</button>
      </div>
    </div>
  );
};

export default TopRatedMoviesList;
