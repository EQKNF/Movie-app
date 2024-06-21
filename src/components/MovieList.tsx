import { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";

interface MovieListProps {
  genreId: number;
}

function MovieList({ genreId }: MovieListProps) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieByGenreId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((res) => {
      console.log(res.data.results);
      setMovieList(res.data.results.slice(0, 15));
    });
  };

  return (
    <div className="flex gap-5 overflow-x-auto scrollbar-hide pt-4">
      {movieList.map((item) => (
        <MovieCard movie={item}></MovieCard>
      ))}
    </div>
  );
}

export default MovieList;
