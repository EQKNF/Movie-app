import GenresList from "../constant/GenresList";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    <div className="px-10 py-2">
      {GenresList.genres.map(
        (item, index) =>
          index <= 4 && (
            <div>
              <div className="px-8 md:px-16">
                <h2 className="text-2xl font-bold text-white">{item.name}</h2>
              </div>
              <div>
                <MovieList genreId={item.id} indexGenre={index} />
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;
