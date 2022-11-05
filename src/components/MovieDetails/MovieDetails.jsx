import { useHistory, useParams } from "react-router-dom"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
function MovieDetails(){
    console.log('in detail')
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() =>{
        console.log(params)
    }, [])
    
    const movie = useSelector(store => store.movies.find((movie) => movie.id== params.mohamed));

    dispatch({
        type: 'FETCH_DETAILS'
    })

    const handleClick = () =>{
        history.push('/')

    }

    return(
        <>
        <nav><button onClick={handleClick}>Back to movie list</button></nav>

        <h2>{movie.title}</h2>
        <img src={movie.poster} alt={movie.title} />
        <p>{movie.description}</p>

        </>
    )
}

export default MovieDetails;