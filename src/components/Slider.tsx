import { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
}

function Slider() {
  const [movieList, setMovieList] = useState<Movie[]>([]);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((response) => {
      console.log(response.data.results);
      setMovieList(response.data.results);
    });
  };

  return (
    <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide">
      {movieList.map((item) => (
        <img
          key={item.id}
          src={imageBaseUrl + item.backdrop_path}
          alt={item.title}
          className="min-w-full h-[310px] object-cover object-left-top mr-5 rounded-lg"
        />
      ))}
    </div>
  );
}

export default Slider;
