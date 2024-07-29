import { useEffect, useState, useCallback } from "react";
import { useParams, useLocation } from "react-router-dom";
import GlobalApi from "./services/GlobalApi";

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  tagline: string;
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
    <div className="bg-[#1A1D29] text-white ">
      {movie ? (
        <div>
          <div className="image-container">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.title}
              className="z-[-10] image"
            />
            <div className="absolute z-10 bottom-[150px]">
              <h2>{movie.tagline}</h2>
            </div>
          </div>

          <div className="pt-10 xl:px-[71px] md:px-[58px] px-[40px] ">
            <h2 className="font-semibold text-3xl tracking-wide              ">
              Details
            </h2>
            <hr />
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
