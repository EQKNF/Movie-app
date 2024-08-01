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
  release_date: string;
  vote_average: number;
  vote_count: number;
  runtime: number;
  genres: genres[];
  production_companies: companies[];
  production_countries: production[];
  spoken_languages: spoken[];
}

interface genres {
  id: number;
  name: string;
}
interface companies {
  id: number;
  name: string;
}
interface production {
  id: number;
  name: string;
}
interface spoken {
  english_name: string;
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
        console.log(res.data);
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
    <div className="relative bg-[#1A1D29] text-white">
      {movie ? (
        <div className="relative z-10">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute inset-0 image-container">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.title}
                className="object-cover w-full h-full image"
              />
            </div>
          </div>

          <div className="relative z-10 flex flex-col gap-5 xl:px-[71px] md:px-[58px] px-[40px] py-[150px]">
            <div className="flex flex-col gap-8">
              <h2 className="text-7xl font-bold max-w-[678px]">
                {movie.title}
              </h2>
              <h2 className="text-xl">{movie.tagline}</h2>
              <div className="flex gap-5 items-center mb-14">
                <button className="py-4 pl-6 pr-8 rounded-md bg-white text-black flex gap-2 hover:bg-zinc-400 transition-all duration-150 ease-in">
                  <HiPlay className="text-3xl" />
                  <h2 className="text-lg tracking-widest">PLAY</h2>
                </button>
                <div className="flex items-center justify-center w-14 h-14 bg-zinc-700 rounded-full text-5xl font-thin hover:bg-zinc-500 transition-all duration-150 ease-in cursor-pointer">
                  <span className="-translate-y-[6px]">+</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="font-semibold text-2xl tracking-wider">DETAILS</h2>
              <hr className="border-gray-500" />

              <div className="flex gap-5 flex-col lg:flex-row">
                <div className="lg:w-1/2 flex flex-col gap-y-5">
                  <h2 className="text-2xl font-bold">{movie.title}</h2>
                  <h2 className=" text-xl">{movie.overview}</h2>
                </div>

                <div className="flex lg:w-1/2 gap-6">
                  <div className="text-nowrap lg:w-1/2 flex flex-col gap-y-4">
                    <h2>
                      Release date:
                      <br />
                      {movie.release_date}
                    </h2>
                    <div>
                      <h2>Genres:</h2>
                      <ul className="flex">
                        {movie.genres.map((genre, index) => (
                          <li key={index}>
                            {genre.name}
                            {index < movie.genres.length - 1 && ","}&nbsp;
                          </li>
                        ))}
                      </ul>
                    </div>
                    <h2>
                      Runtime:
                      <br />
                      {movie.runtime}m
                    </h2>
                  </div>
                  <div className="text-nowrap lg:w-1/2 flex flex-col gap-y-4">
                    <h2>
                      Rating:
                      <br />
                      {movie.vote_average}
                    </h2>
                    <h2>
                      Vote count:
                      <br />
                      {movie.vote_count}
                    </h2>
                  </div>
                  <div className="text-nowrap lg:w-1/2 flex flex-col gap-y-4">
                    <div>
                      <h2>Countries of origin:</h2>
                      <ul className="flex">
                        {movie.production_countries.map((country, index) => (
                          <li key={index}>
                            {country.name}
                            {index < movie.production_countries.length - 1 &&
                              ","}
                            &nbsp;
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h2>Spoken languages:</h2>
                      <ul className="flex">
                        {movie.spoken_languages.map((language, index) => (
                          <li key={index}>
                            {language.english_name}
                            {index < movie.spoken_languages.length - 1 && ","}
                            &nbsp;
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h2>Production companies:</h2>
                      <ul className="flex flex-col">
                        {movie.production_companies.map((company, index) => (
                          <li key={index}>
                            {company.name}
                            {index < movie.production_companies.length - 1 &&
                              ","}
                            {<br />}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
