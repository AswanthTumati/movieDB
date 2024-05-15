import React from 'react';
import { useSelector } from 'react-redux';
import { selectSearchedMovies, selectSearchedQuery } from '../store/reducers/movieSlice';
import MoviesDisplay from './MoviesDisplay'; // Import the MoviesDisplay component
import './SearchedMovies.scss';

const SearchedMovies = () => {
  const searchedMovies = useSelector(selectSearchedMovies);
  const searchQuery = useSelector(selectSearchedQuery);

  if (searchedMovies && searchedMovies.length > 0) {
    console.log('Searched movies:', searchedMovies);

    return (
      <div className="searched-movies-container">
        <div className="search-results-header">
          <h2 className="sticky-h2">Search results for: "{searchQuery}"</h2>
        </div>
        <MoviesDisplay movies={searchedMovies} listType="searchresults" /> {/* Pass the searchedMovies and a listType prop */}
      </div>
    );
  } else {
    console.log('No search results found');
    return null;
  }
};

export default SearchedMovies;
