import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  poster_path: string; // Added poster_path
}

function Slider() {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640); // Track if the screen size is smaller than md

  useEffect(() => {
    getTrendingMovies();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
              <Link to={`/info/${item.id}`}>
                <div className="relative group">
                  <div className="absolute inset-0 rounded-md border-[3px] border-transparent transition-all duration-300 ease-in group-hover:border-white m-[-2px]"></div>
                  <img
                    src={
                      imageBaseUrl +
                      (isMobile ? item.poster_path : item.backdrop_path)
                    }
                    alt={item.title}
                    className="object-cover rounded-sm 2xl:max-h-[700px] lg:max-h-[372px] md:max-h-[250px] sm:max-h-[150px] max-h-[520px] w-full shadow-lg shadow-black"
                  />
                  <h3 className="absolute inset-0 flex items-center left-10 lg:left-20  opacity-0 sm:opacity-90 max-w-[600px] ">
                    <span className="font-bold xl:text-7xl lg:text-6xl md:text-5xl sm:text-3xl text-white font-outline-1">
                      {item.title}
                    </span>
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-pagination pt-1"></div>

      <button className="absolute top-12 left-0 h-full w-[56px] cursor-pointer opacity-0 hover:opacity-100 transition-all duration-300 swiper-button-prev text-white"></button>
      <button className="absolute top-12 right-0 h-full w-[56px] cursor-pointer opacity-0 hover:opacity-100 transition-all duration-300 swiper-button-next text-white"></button>
    </div>
  );
}
export default Slider;
