import { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const index_ = 4;

interface MovieListProps {
  genreId: number;
}

function MovieList({ genreId }: MovieListProps) {
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
            ${index_ % 3 == 0 ? "mt-[80px]" : "mt-[150px]"} `}
      />

      <div
        ref={elementRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide p-5"
      >
        {movieList.map((item) => (
          <MovieCard movie={item}></MovieCard>
        ))}
      </div>

      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_ % 3 == 0 ? "mt-[80px]" : "mt-[150px]"}`}
      />
    </div>
  );
}

export default MovieList;
