import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './reducers/movieSlice';

export default configureStore({
  reducer: {
    movies: movieReducer,
  },
});
