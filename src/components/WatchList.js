import React from 'react';
import { useSelector } from 'react-redux';
import { selectWatchlist } from '../store/reducers/movieSlice';
import './Watchlist.scss'; 

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const WatchList = () => {
  const watchlist = useSelector(selectWatchlist);

  return (
    <div className="watchlist-movies-container">
      <div className="watchlist-header">
          <h2>Your Watchlist</h2>
        </div>
      {watchlist.length > 0 ? (
        <div className="watchlist-movies">
        {watchlist.map((movie, index) => (
          
            <div className="watchlist-movie">
              <img src={API_IMG + movie.poster_path} alt='movie poster' className="watchlist-movie-poster" />
              <div className="watchlist-movie-details">
              {movie.title || movie.original_name}
                <p>Rating: {movie.vote_average.toFixed(1)}</p>
              </div>
            </div>
          
        ))}
      </div>
      ) : (
        <div className="empty-watchlist">
          <h1>Your watchlist is empty</h1>
        </div>
      )}
    </div>
  );
};

export default WatchList;
