import React, {useEffect} from 'react'
import useApi from '../services/ApiService';
import { useDispatch } from 'react-redux';
import { setTopRatedShows } from '../store/reducers/movieSlice';
import TopRatedShowsList from './TopRatedShowsList';

const API_URL = 'https://api.themoviedb.org/3/tv/top_rated?api_key=5f0c64cdf9940b12593669275c517b6f';


const TopRatedShows = () => {
    const dispatch = useDispatch();

    const { data: movies, loading, error } = useApi(API_URL);

    useEffect(() => {
        if (movies) {
          dispatch(setTopRatedShows(movies));
        }
      }, [dispatch, movies]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <TopRatedShowsList movies={movies} listType="topratedshow"/> /* Passng listType to TopMovieList to use it as params to access it in movieDetails for list checking with listType*/
      )}
    </div>
  )
}

export default TopRatedShows