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
    <div className="my-5 mx-1 flex flex-col items-center select-none hover:scale-105 transition-all duration-300 ease-in">
      <div className="relative cursor-pointer ">
        <img
          src={IMAGE_BASE_URL + movie.backdrop_path}
          className="object-cover rounded-md shadow-lg shadow-black w-[100%]"
        />
        <div className="absolute inset-0 rounded-lg border-[3px] border-transparent hover:border-white transition-all duration-300 ease-in m-[-6px]"></div>
      </div>
      <h2 className="w-[110px] md:w-[340px] text-white pt-2 text-center">
        {movie.title}
      </h2>
    </div>
  );
}

export default LandscapeMovieCard;
