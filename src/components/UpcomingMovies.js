import React, {useEffect} from 'react'
import UpcomingMovieList from './UpcomingMovieList';
import useApi from '../services/ApiService';
import { useDispatch } from 'react-redux';
import { setUpcomingMovies } from '../store/reducers/movieSlice';
import MoviesDisplay from './MoviesDisplay';


const API_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=5f0c64cdf9940b12593669275c517b6f';


const UpcomingMovies = () => {
    const dispatch = useDispatch();

    const { data: movies, loading, error } = useApi(API_URL);

    useEffect(() => {
        if (movies) {
          dispatch(setUpcomingMovies(movies));
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
          <h2 style={{'color': 'white', textAlign: 'center'}}>Upcoming  Movies</h2>
          <MoviesDisplay movies={movies} listType="upcoming"/>
        </div> /* Passng listType to TopMovieList to use it as params to access it in movieDetails for list checking with listType*/
      )}
    </div>
  )
}

export default UpcomingMovies