import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom';
import HomeScreen from './HomeScreen';


const Dashboard = () => {
  return (
    <Router>
        <HomeScreen/>
        <Routes>
            <Route path='/' element={<HomeScreen/>}></Route>
        </Routes>
    </Router>
  )
}

export default Dashboard