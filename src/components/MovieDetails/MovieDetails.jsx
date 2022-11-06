import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
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

  const movie = useSelector((store) =>
    store.movies.find((movie) => movie.id == params.mohamed)
  );
  const genre = useSelector((store) => store.genres);

  console.log("genre is:", genre);

  const handleClick = () => {
    history.push("/");
  };

  return (
    <>
      <nav>
        <button onClick={handleClick}>Back to movie list</button>
      </nav>

      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} />
      {genre.map(genre => (
        <p key={genre.genre}>{genre.genre}</p>
      ))}
      <p>{movie.description}</p>
    </>
  );
}

export default MovieDetails;
