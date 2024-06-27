import { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import LandscapeMovieCard from "./LandscapeMovieCard";

interface MovieListProps {
  genreId: number;
  indexGenre: number;
}

function MovieList({ genreId, indexGenre }: MovieListProps) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

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

  const slideRight = (element: HTMLDivElement | null) => {
    if (element) {
      element.scrollLeft += 500;
    }
  };
  const slideLeft = (element: HTMLDivElement | null) => {
    if (element) {
      element.scrollLeft -= 500;
    }
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${indexGenre % 3 == 0 ? "mt-[80px]" : "mt-[150px]"} `}
      />

      <div
        ref={elementRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide p-5"
      >
        {movieList.map((item) => (
          <>
            {indexGenre % 3 == 0 ? (
              <LandscapeMovieCard movie={item} />
            ) : (
              <MovieCard movie={item} />
            )}
          </>
        ))}
      </div>

      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${indexGenre % 3 == 0 ? "mt-[80px]" : "mt-[150px]"}`}
      />
    </div>
  );
}

export default MovieList;