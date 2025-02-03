import React from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

const movies = [
  { id: 1, title: "Inception" },
  { id: 2, title: "The Dark Knight" },
  { id: 3, title: "Interstellar" },
];

function Home() {
  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
