const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

interface Movie {
  poster_path: string;
}

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className=" pb-6 ">
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        className="max-h-[446px] rounded-lg
        border-[3px] border-transparent hover:border-white
        hover:scale-105 transition-all duration-150 ease-in p-0.5 cursor-pointer select-none"
      />
    </div>
  );
}

export default MovieCard;
