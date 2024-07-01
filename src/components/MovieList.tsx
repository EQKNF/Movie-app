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

function MovieList({ genreId, indexGenre }: MovieListProps) {
  const [movieList, setMovieList] = useState([]);

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
        centeredSlides={true}
        loop={true}
        spaceBetween={20}
        slidesPerView={6}
        slidesOffsetBefore={0}
        /*
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        */
        navigation={{
          nextEl: `.swiper-button-next-${indexGenre}`,
          prevEl: `.swiper-button-prev-${indexGenre}`,
        }}
        modules={[Navigation]}
        className="p-[70px] py-4 relative"
      >
        {movieList.map((item) => (
          <SwiperSlide key={indexGenre}>
            {indexGenre % 3 === 0 ? (
              <MovieCard movie={item} />
            ) : (
              <LandscapeMovieCard movie={item} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={`swiper-button-prev-${indexGenre} hidden sm:block absolute top-0 left-0 h-full w-[56px] cursor-pointer opacity-0 hover:opacity-100 transition-all duration-300 swiper-button-prev`}
      ></button>
      <button
        className={`swiper-button-next-${indexGenre} hidden sm:block absolute top-0 right-0 h-full w-[56px] cursor-pointer opacity-0 hover:opacity-100 transition-all duration-300 swiper-button-next`}
      ></button>
    </div>
  );
}

export default MovieList;
