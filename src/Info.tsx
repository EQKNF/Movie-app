import { useEffect, useState, useCallback } from "react";
import { useParams, useLocation } from "react-router-dom";
import GlobalApi from "./services/GlobalApi";
import { HiPlay } from "react-icons/hi2";

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
    <div className="bg-[#1A1D29] text-white min-h-[100vh] relative">
      {movie ? (
        <div>
          <div className="image-container">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.title}
              className="z-[-10] image"
            />
          </div>

          <div className="absolute top-[300px] z-10 flex flex-col gap-5 xl:px-[71px] md:px-[58px] px-[40px] ">
            <div>
              <h2>{movie.title}</h2>
              <h2>{movie.tagline}</h2>
              <div className="flex gap-5 items-center">
                <button className="py-4 pl-6 pr-8 rounded-md bg-white text-black flex gap-2 hover:bg-zinc-400 transition-all duration-150 ease-in">
                  <HiPlay className="text-3xl" />
                  <h2 className="text-lg tracking-widest">PLAY</h2>
                </button>
                <div className="flex items-center justify-center w-14 h-14 bg-zinc-700 rounded-full text-5xl font-thin hover:bg-zinc-500 transition-all duration-150 ease-in cursor-pointer">
                  <span className="-translate-y-[6px]">+</span>
                </div>
              </div>
            </div>

            <h2 className="font-semibold text-3xl tracking-wide              ">
              Details
            </h2>
            <hr className="border-gray-500" />
            <h2>{movie.title}</h2>
            <h2>{movie.overview}</h2>
          </div>
        </div>
      ) : (
        <div className="py-[450px] flex flex-col justify-center items-center gap-5">
          <p>Loading...</p>
          <p>Infinite loading; name: "AxiosError", code: "ERR_BAD_REQUEST"</p>
        </div>
      )}
    </div>
  );
}

export default Info;
