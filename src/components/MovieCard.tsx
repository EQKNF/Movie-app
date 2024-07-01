const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

interface Movie {
  poster_path: string;
}

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <>
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        className="max-h-[400px] rounded-lg
        border-[3px] border-transparent hover:border-gray-50
        hover:scale-110 transition-all duration-150 ease-in p-0.5 cursor-pointer"
      />
    </>
  );
}

export default MovieCard;
