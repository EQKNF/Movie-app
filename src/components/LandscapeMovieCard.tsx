const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

interface Movie {
  backdrop_path: string;
  title: string;
}

interface LandscapeMovieCard {
  movie: Movie;
}

function LandscapeMovieCard({ movie }: LandscapeMovieCard) {
  return (
    <div className="group hover:scale-110 transition-all duration-150 ease-in p-0.5 cursor-pointer">
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        className="rounded-lg border-[3px] border-transparent group-hover:border-gray-400 p-0.5"
      />
      <h2 className="w-[110px] md:w-[260px] text-white mt-2 text-center">
        {movie.title}
      </h2>
    </div>
  );
}

export default LandscapeMovieCard;
