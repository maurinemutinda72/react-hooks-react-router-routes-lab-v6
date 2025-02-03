import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const movies = [
  { id: 1, title: "Inception", time: "148 min", genres: ["Sci-Fi", "Thriller"] },
  { id: 2, title: "The Dark Knight", time: "152 min", genres: ["Action", "Drama"] },
  { id: 3, title: "Interstellar", time: "169 min", genres: ["Sci-Fi", "Adventure"] },
];

function Movie() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <h1>Movie Not Found</h1>;

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>Duration: {movie.time}</p>
      <div>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre} </span>
        ))}
      </div>
    </div>
  );
}

export default Movie;

