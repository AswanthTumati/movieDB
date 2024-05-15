import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeScreen from './HomeScreen';
import Navbar from './Navbar'
import MovieDetails from './MovieDetails';
import SearchedMovies from './SearchedMovies';
import TopRatedMovies from './TopRatedMovies'
import UpcomingMovies from './UpcomingMovies';

const AppRouter = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<HomeScreen/>}></Route>
      <Route path="/popular" element={<HomeScreen/>}></Route>
      <Route path="/toprated" element={<TopRatedMovies/>}></Route>
      <Route path="/upcoming" element={<UpcomingMovies/>}></Route>
      <Route path="/movie/:id" element={<MovieDetails />} /> 
      <Route path='/search' element={<SearchedMovies/>}></Route>
      </Routes>
    </Router>
  )
}

export default AppRouter