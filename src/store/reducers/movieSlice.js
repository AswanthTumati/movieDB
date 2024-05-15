import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    popularMovies: [],
    upcomingMovies: [],
    topRatedMovies: [],
    searchedMovies:[],
    popularShows: [],
    topRatedShows:[],
    searchedQuery: [],
    watchlist: [],
    authorized: 'false'
  },
  reducers: {
    setPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    setUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    setSearchedMovies: (state, action) => {
        state.searchedMovies = action.payload;
    },
    setTopRatedMovies: (state,action) =>{
        state.topRatedMovies = action.payload;
    },
    setSearchedQuery : (state, action)=>{
        state.searchedQuery =action.payload;
    },
    setPopularShows: (state,action)=>{
        state.popularShows = action.payload;
    },
    setTopRatedShows: (state,action) =>{
        state.topRatedShows = action.payload;
    },
    setAuthorized : (state,action) =>{
        state.authorized = action.payload;
    },
    setWatchlist: (state, action) => {
        state.watchlist = [...state.watchlist, action.payload];
    }
      
    
  },
});

export const { setPopularMovies, setUpcomingMovies, setSearchedMovies, setSearchedQuery, setAuthorized, setWatchlist, setTopRatedMovies, setPopularShows, setTopRatedShows } = movieSlice.actions;

export const selectPopularMovies = (state) => state.movies.popularMovies;
export const selectUpcomingMovies = (state) => state.movies.upcomingMovies;
export const selectTopRatedMovies = (state) => state.movies.topRatedMovies;
export const selectSearchedMovies = (state) => state.movies.searchedMovies;
export const selectSearchedQuery = (state) => state.movies.searchedQuery;
export const selectPopularShows = (state) =>state.movies.popularShows;
export const selectTopRatedShows = (state) =>state.movies.topRatedShows;

export const selectWatchlist = (state) => state.movies.watchlist;
export const selectAuthorized = (state) => state.movies.authorized;


export default movieSlice.reducer;
