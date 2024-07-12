const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

interface Movie {
  poster_path: string;
}

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="mt-5 mb-10 mx-1">
      <div className="relative group hover:scale-105 transition-all duration-300 ease-in">
        <img
          src={IMAGE_BASE_URL + movie.poster_path}
          className="object-cover rounded-md cursor-pointer shadow-lg shadow-black w-[100%]"
        />

        <div className="absolute inset-0 rounded-lg border-[3px] border-transparent transition-all duration-300 ease-in group-hover:border-white m-[-6px]"></div>
      </div>
    </div>
  );
}

export default MovieCard;
