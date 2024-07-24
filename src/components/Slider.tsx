import { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
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
    <div className="relative swiper-container pt-[76px]">
      <div className="swiper-wrapper">
        <Swiper
          effect="slide"
          grabCursor={true}
          centeredSlides={true}
          watchSlidesProgress={true}
          loop={true}
          spaceBetween={15}
          slidesPerView={1}
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
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Pagination, Navigation]}
          className="p-[75px] py-4"
        >
          {movieList.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide cursor-pointer">
              <div className="relative group">
                <div className="absolute inset-0 rounded-md border-[3px] border-transparent transition-all duration-300 ease-in group-hover:border-white m-[-2px]"></div>
                <img
                  src={imageBaseUrl + item.backdrop_path}
                  alt={item.title}
                  className=" object-cover rounded-md 2xl:max-h-[700px] lg:max-h-[500px] sm:max-h-[300px] w-full shadow-lg shadow-black"
                />
                <h3 className="absolute inset-0 flex items-center left-10 font-semibold 2xl:text-7xl xl:text-7xl lg:text-7xl md:text-7xl sm:text-7xl opacity-90 max-w-[600px]">
                  {item.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-pagination pt-1"></div>

      <button className="hidden sm:block absolute top-0 left-0 h-full w-[56px] cursor-pointer opacity-0 hover:opacity-100 transition-all duration-300 swiper-button-prev text-white"></button>
      <button className="hidden sm:block absolute top-0 right-0 h-full w-[56px] cursor-pointer opacity-0 hover:opacity-100 transition-all duration-300 swiper-button-next text-white"></button>
    </div>
  );
}
export default Slider;
