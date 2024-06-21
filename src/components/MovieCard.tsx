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
        className="w-[110px] md:w-[200px] rounded-2xl
        hover:border-[3px] border-gray-400 cursor-pointer
        hover:scale-110 transition-all duration-150 ease-in p-0.5"
      />
    </>
  );
}

export default MovieCard;
