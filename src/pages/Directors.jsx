import NavBar from "../components/NavBar";

const directors = [
  { name: "Christopher Nolan", movies: ["Inception", "Interstellar"] },
  { name: "Quentin Tarantino", movies: ["Pulp Fiction", "Kill Bill"] },
];

function Directors() {
  return (
    <div>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <article key={index}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, idx) => (
              <li key={idx}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Directors;
