import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import './MovieDetails.css';

function MovieDetails() {
  console.log("in detail");
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch({
      type: "FETCH_GENRES",
      payload: params.mohamed,
    });
  }, [params.mohamed]);

  //get movies from store and loop to get movie that is the same as 
  const movie = useSelector((store) =>
    store.movies.find((movie) => movie.id == params.mohamed)
  );
  // genre reducer to get genre of selected movie
  const genre = useSelector((store) => store.genres);

  console.log("genre is:", genre);
  //when button is clicked, user is taken back to homepage/movie list
  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className="container">
        <div className="card">
      <h2>{movie.title}</h2>
      {genre.map(genre => (
        <p key={genre.genre} className="genre">{genre.genre}</p>
      ))}
      <img src={movie.poster} alt={movie.title} />
      <br />
      <p className="description">{movie.description}</p>
      <button className="backBtn" onClick={handleClick}>Back to movie list</button>
      </div>
    </div>
  );
}

export default MovieDetails;
