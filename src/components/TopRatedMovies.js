import React,{useEffect} from 'react';
import useApi from '../services/ApiService';
import { useDispatch } from 'react-redux';
import { setTopRatedMovies } from '../store/reducers/movieSlice';
import TopRatedMoviesList from './TopRatedMoviesList';
import MoviesDisplay from './MoviesDisplay';

const API_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=5f0c64cdf9940b12593669275c517b6f';

const TopRatedMovies = () => {
    const dispatch = useDispatch();

  const { data: movies, loading, error } = useApi(API_URL);

  useEffect(() => {
    if (movies) {
      dispatch(setTopRatedMovies(movies));
    }
  }, [dispatch, movies]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          <h2 style={{'color': 'white', textAlign: 'center'}}>Top Rated Movies</h2>
          <MoviesDisplay movies={movies} listType="toprated"/>
        </div>  /* Passng listType to TopMovieList to use it as params to access it in movieDetails for list checking with listType*/
      )}
    </div>
  );
};

export default TopRatedMovies;