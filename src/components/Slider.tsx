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
    <div className="relative swiper-container ">
      <div className="swiper-wrapper ">
        <Swiper
          effect="slide"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          spaceBetween={20}
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
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Pagination, Navigation]}
          className="p-[60px] py-4"
        >
          {movieList.map((item) => (
            <SwiperSlide
              key={item.id}
              className="outline outline-3 rounded-md outline-transparent hover:outline-slate-50 transition-all duration-300 cursor-pointer"
            >
              <img
                src={imageBaseUrl + item.backdrop_path}
                alt={item.title}
                className="object-cover rounded-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-pagination pt-4"></div>

      <button className="hidden sm:block absolute top-0 left-0 h-full w-[56px] cursor-pointer opacity-0 hover:opacity-100 transition-all duration-300 swiper-button-prev"></button>
      <button className="hidden sm:block absolute top-0 right-0 h-full w-[56px] cursor-pointer opacity-0 hover:opacity-100 transition-all duration-300 swiper-button-next"></button>
    </div>
  );
}
export default Slider;
