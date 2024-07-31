import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import LandscapeMovieCard from "./LandscapeMovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

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
      //console.log(res.data.results);
      setMovieList(res.data.results.slice(0, 20));
    });
  };

  return (
    <div className="relative swiper-container overflow-hidden">
      <Swiper
        effect="slide"
        grabCursor={false}
        watchSlidesProgress={true}
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
        className="relative px-10 md:px-[72px] "
      >
        {movieList.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/info/${item.id}`}>
              {indexGenre % 3 === 0 ? (
                <MovieCard movie={item} />
              ) : (
                <LandscapeMovieCard movie={item} />
              )}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={`swiper-button-prev-${indexGenre} hidden sm:block absolute top-0 left-0 h-full w-[56px] cursor-pointer opacity-0 hover:opacity-100 transition-all duration-300 z-10`}
      >
        <HiChevronLeft className="text-[50px] text-white -translate-x-2" />
      </button>
      <button
        className={`swiper-button-next-${indexGenre} hidden sm:block absolute top-0 right-0 h-full w-[56px] cursor-pointer opacity-0 hover:opacity-100 transition-all duration-300 z-10`}
      >
        <HiChevronRight className="text-[50px] text-white translate-x-4" />
      </button>
    </div>
  );
}

export default MovieList;
