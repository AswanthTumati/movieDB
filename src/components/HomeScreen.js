import React from 'react';
import TopMovies from './TopMovies';
import './HomeScreen.scss'
import UpcomingMovies from './UpcomingMovies';
import TopRatedMovies from './TopRatedMovies';
import PopularShows from './PopularShows';
import TopRatedShows from './TopRatedShows';

function HomeScreen() {
  
  return (
    
      <div className='homescreen' >
        <TopMovies/>  
      </div>
    
  );
}

export default HomeScreen;

