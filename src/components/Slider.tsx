import { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
}

function Slider() {
  const [movieList, setMovieList] = useState<Movie[]>([]);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  function getTrendingMovies() {
    GlobalApi.getTrendingVideos.then((response) => {
      console.log(response.data.results);
      setMovieList(response.data.results.slice(0, 15));
    });
  }

  return (
    <div className="relative swiper-container">
      <div className="swiper-wrapper padding-bottom: 30px;">
        <Swiper
          effect="slide"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          spaceBetween={20}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Pagination, Navigation]}
          className="p-4"
        >
          {movieList.map((item) => (
            <SwiperSlide
              key={item.id}
              className="hover:outline outline-3 rounded-md transition-all duration-300 cursor-pointer"
            >
              <img
                src={imageBaseUrl + item.backdrop_path}
                alt={item.title}
                className="object-cover rounded-md w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-pagination pb-0"></div>

      <button className="hidden sm:block absolute top-0 left-0 h-full w-[56px] cursor-pointer opacity-0 hover:opacity-100 img-slider-btn transition-all duration-300 swiper-button-prev"></button>
      <button className="hidden sm:block absolute top-0 right-0 h-full w-[56px] cursor-pointer opacity-0 hover:opacity-100 img-slider-btn transition-all duration-300 swiper-button-next"></button>
    </div>
  );
}

export default Slider;
