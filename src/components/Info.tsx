import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

function Info() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const movie = location.state?.movie;

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top on component mount
  }, []);

  if (!movie) {
    return <div>No movie data available</div>;
  }

  return (
    <div className="min-h-[100vh]">
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>ID: {id}</p>
      {/* Add more movie details as needed */}
    </div>
  );
}

export default Info;
