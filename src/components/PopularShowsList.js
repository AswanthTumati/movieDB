import React, { useState, useRef } from 'react';
import './TopMovieList.scss';
import { Link } from 'react-router-dom';
import { PlusSquareFilled } from '@ant-design/icons'; 
import { useDispatch } from 'react-redux';
import { setWatchlist } from '../store/reducers/movieSlice';


const API_IMG = "https://image.tmdb.org/t/p/w500/";


const Movie = ({ movie ,listType}) => {
    const [isAddedToWatchlist, setIsAddedToWatchlist] = useState(false);
    const dispatch = useDispatch();
    console.log('movie sending to watchlist', movie, typeof movie)

    const handleAddToWatchlist = () => {
        setIsAddedToWatchlist(true);
        dispatch(setWatchlist(movie));
        
      };

    return (
        <div className='movie'>
        <Link to={`/show/${movie.id}?listType=${listType}`} className="movie-link"> {/* Passng movie Id and listType as params to access it in movieDetails for list checking with listType*/}
            <img src={API_IMG + movie.poster_path} alt='movie poster' />
        </Link>
        {!isAddedToWatchlist && (
            <PlusSquareFilled className="watchlist-icon" style={{ color: 'white' }} onClick={handleAddToWatchlist} />
        )}
        {isAddedToWatchlist && (
            <PlusSquareFilled className="watchlist-icon" style={{ color: 'orange' }} />
        )}
    </div>
    );
};

const PopularShowsList = ({movies, listType}) => {
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
          <h2>Popular Shows</h2>
          {/*<p>Check out what is coming your way</p>*/}
        </div>
        <div className="movie-list" ref={movieListRef}>
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} listType={listType} />
          ))}
        </div>
      </div>
      <div className="navigation-arrows">
        <button className="arrow left" onClick={() => handleScroll(-250)}>&lt;</button>
        <button className="arrow right" onClick={() => handleScroll(250)}>&gt;</button>
      </div>
    </div>
  )
}

export default PopularShowsList