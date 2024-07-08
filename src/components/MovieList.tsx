import { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import LandscapeMovieCard from "./LandscapeMovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface MovieListProps {
  genreId: number;
  indexGenre: number;
}

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
}

function MovieList({ genreId, indexGenre }: MovieListProps) {
  const [movieList, setMovieList] = useState<Movie[]>([]);

  useEffect(() => {
    getMovieByGenreId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((res) => {
      console.log(res.data.results);
      setMovieList(res.data.results.slice(0, 20));
    });
  };

  return (
    <div className="relative swiper-container">
      <Swiper
        effect="slide"
        grabCursor={false}
        centeredSlides={false}
        loop={false}
        spaceBetween={20}
        slidesPerGroup={3}
        breakpoints={{
          1024: {
            slidesPerView: 6,
          },
          768: {
            slidesPerView: 5,
          },
          640: {
            slidesPerView: 4,
          },
          320: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          nextEl: `.swiper-button-next-${indexGenre}`,
          prevEl: `.swiper-button-prev-${indexGenre}`,
        }}
        modules={[Navigation]}
        className="relative px-[58px] pt-4"
      >
        {movieList.map((item) => (
          <SwiperSlide key={item.id}>
            {indexGenre % 3 === 0 ? (
              <MovieCard movie={item} />
            ) : (
              <LandscapeMovieCard movie={item} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={`swiper-button-prev-${indexGenre} hidden sm:block absolute top-1/2 left-0 transform -translate-y-1/2 h-12 w-12 text-2xl text-white bg-gray-800 rounded-full opacity-70 hover:opacity-100 transition-all duration-300 z-10`}
        onClick={() => console.log("Prev button clicked")}
      >
        &#8249;
      </button>
      <button
        className={`swiper-button-next-${indexGenre} hidden sm:block absolute top-1/2 right-0 transform -translate-y-1/2 h-12 w-12 text-2xl text-white bg-gray-800 rounded-full opacity-70 hover:opacity-100 transition-all duration-300 z-10`}
        onClick={() => console.log("Next button clicked")}
      >
        &#8250;
      </button>
    </div>
  );
}

export default MovieList;
