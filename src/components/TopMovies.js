import React,{useEffect} from 'react';
import useApi from '../services/ApiService';
import TopMovieList from './TopMovieList'; 
import { useDispatch } from 'react-redux';
import { setPopularMovies } from '../store/reducers/movieSlice';
import MoviesDisplay from './MoviesDisplay';


const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=5f0c64cdf9940b12593669275c517b6f';

const TopMovies = () => {
    const dispatch = useDispatch();

  const { data: movies, loading, error } = useApi(API_URL);

  useEffect(() => {
    if (movies) {
      dispatch(setPopularMovies(movies));
    }
  }, [dispatch, movies]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
         /* Passng listType to TopMovieList to use it as params to access it in movieDetails for list checking with listType*/
        <div>
          <h2 style={{'color': 'white', textAlign: 'center'}}>Popular Movies</h2>
          <MoviesDisplay movies={movies} listType="topmovies"/>
        </div>
        
      )}
    </div>
  );
};

export default TopMovies;