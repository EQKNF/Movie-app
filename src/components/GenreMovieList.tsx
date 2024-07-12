import { useEffect, useState } from "react";
import GenresList from "../constant/GenresList";
import MovieList from "./MovieList";

interface Genre {
  id: number;
  name: string;
}

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function GenreMovieList() {
  const [shuffledGenres, setShuffledGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const shuffled = shuffleArray([...GenresList.genres]);
    setShuffledGenres(shuffled);
  }, []);

  return (
    <div className="mt-6 mb-[70px]">
      {shuffledGenres.slice(0, 5).map((item, index) => (
        <div key={item.id}>
          <div className="px-16 ">
            <h2 className="text-2xl font-semibold text-white">{item.name}</h2>
          </div>
          <div>
            <MovieList genreId={item.id} indexGenre={index} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default GenreMovieList;
