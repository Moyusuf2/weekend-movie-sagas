import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory()

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} className="card">
                            <h3>{movie.title}</h3>
                            <img className='poster' src={movie.poster} alt={movie.title} onClick={() => history.push(`/${movie.id}`)} />


                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;