import GenresList from "../constant/GenresList";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    <div>
      {GenresList.genres.map(
        (item, index) =>
          index <= 4 && (
            <div className="p-4 px-8 md:px-16">
              <h2 className="text-2xl font-bold text-white">{item.name}</h2>
              <MovieList genreId={item.id}></MovieList>
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;
