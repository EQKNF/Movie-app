import { useEffect, useState, useCallback } from "react";
import { useParams, useLocation } from "react-router-dom";
import GlobalApi from "./services/GlobalApi";

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
}

function Info() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const [movie, setMovie] = useState<Movie | null>(
    location.state?.movie || null
  );

  const fetchMovie = useCallback(() => {
    if (id) {
      GlobalApi.getMovieById(id).then((res) => {
        setMovie(res.data);
      });
    }
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!movie && id) {
      fetchMovie();
    }
  }, [id, movie, fetchMovie]);

  return (
    <div className="pt-[80px] px-[71px] bg-[#1A1D29]">
      {movie ? (
        <div>
          <h2 className="text-white">{movie.title}</h2>
          <div className="image-container">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
            />
          </div>

          <div>
            <h2 className="py-5 text-white font-semibold text-3xl tracking-wide">
              Details
            </h2>
            <hr className="" />
            <h2>{movie.overview}</h2>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Info;
