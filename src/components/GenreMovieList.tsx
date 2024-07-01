import GenresList from "../constant/GenresList";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    <div className="">
      {GenresList.genres.map(
        (item, index) =>
          index <= 5 && (
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
