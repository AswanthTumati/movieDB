import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Navbar.scss';
import useSearchApi from '../services/SearchApiService';
import { setSearchedQuery, setSearchedMovies } from '../store/reducers/movieSlice';



const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { fetchData } = useSearchApi();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = async () => {
    const TMDB_URL = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=5f0c64cdf9940b12593669275c517b6f`;
    const OMDB_URL = `https://www.omdbapi.com/?t=${searchQuery}&apikey=9e7d59eb`;

    // Fetch data from both APIs
    const [tmdbResponse, omdbResponse] = await Promise.all([
      fetchData(TMDB_URL),
      fetchData(OMDB_URL),
    ]);

    const { data: tmdbData, error: tmdbError, loading: tmdbLoading } = tmdbResponse;
    const { data: omdbData, error: omdbError, loading: omdbLoading } = omdbResponse;

    
    if (!tmdbError && !tmdbLoading && tmdbData) {
      dispatch(setSearchedMovies(tmdbData.results));
      navigate('/search'); 
    } else if (!omdbError && !omdbLoading && omdbData) {
      dispatch(setSearchedMovies(omdbData));
      navigate('/search'); 
    } else {
      console.log('Error fetching data from both APIs:', tmdbError, omdbError);
    }
    
    
    setSearchQuery('');
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    dispatch(setSearchedQuery(event.target.value));
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  

  return (
    <nav className="navbar">
      <div className="navbar__item">
        <h2 className="navbar__title">
          <Link to={'/'}>MovieDB</Link>
        </h2>
      </div>
      <div className="navbar__search-container">
        <input
          type="text"
          className="search-box"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      
      <div className="navbar__item">
        <Link to={'/popular'} className='watchlist'>Popular</Link>
      </div>
      <div className="navbar__item">
        <Link to={'/toprated'} className='watchlist'>Top rated</Link>
      </div>
      <div className="navbar__item">
        <Link to={'/upcoming'} className='watchlist'>Upcoming</Link>
      </div>
    </nav>
  );
};

export default Navbar;
