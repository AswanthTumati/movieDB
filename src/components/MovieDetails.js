import React from 'react';
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectPopularMovies, selectUpcomingMovies, selectTopRatedMovies, selectSearchedMovies } from '../store/reducers/movieSlice';
import './MovieDetails.scss'; 

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieDetails = () => {
    /* Accessing movie Id and listType using params from route parameters for list checking with listType*/
    const [searchParams] = useSearchParams();
    const listType = searchParams.get('listType');
    //console.log('listtype', listType)
    const { id } = useParams(); // Get movie ID from route parameters
    //console.log('movie id', id)
    const popularMovies = useSelector(selectPopularMovies);
    const upcomingMovies = useSelector(selectUpcomingMovies);
    const topRatedMovies = useSelector(selectTopRatedMovies);
    const searchedMovies = useSelector(selectSearchedMovies)


    let movie;
    if (listType === 'topmovies') {
        movie = popularMovies.find(movie => movie.id.toString() === id);
    } else if (listType === 'upcoming') {
        movie = upcomingMovies.find(movie => movie.id.toString() === id);
    }
    else if (listType === 'toprated'){
        movie = topRatedMovies.find(movie=> movie.id.toString()===id)
    }
    
    else if (listType === 'searchresults'){
        movie = searchedMovies.find(movie=> movie.id.toString()===id)
    }

    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <div className="movie-details-container">
            <div className='movie-container'>
            <div className="left-section">
                <img src={API_IMG + movie.poster_path} alt='movie poster' className='movie-img' />
            </div>
            <div className="right-section">
                <div className="title">
                    <h2>{movie.title}</h2>
                </div>
                <div className="info-row">
                    <h3>Release Date</h3>
                    <p>{movie.release_date}</p>
                </div>
                <div className="info-row">
                    <div className="rating">
                        <h3>Rating</h3>
                        <p>{movie.vote_average.toFixed(1)}</p>
                    </div>
                </div>
                <div className="overview-row">
                    <div className="synopsis">
                        <h3>Synopsis</h3>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default MovieDetails;
