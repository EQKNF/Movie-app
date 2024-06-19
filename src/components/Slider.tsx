import { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
}

function Slider() {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const elementSliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((response) => {
      console.log(response.data.results);
      setMovieList(response.data.results.slice(0, 15));
    });
  };

  const sliderRight = (element: HTMLDivElement | null) => {
    if (element) {
      const containerWidth = element.clientWidth;
      const padding = 64 * 2; 
      const marginRight = 21;
      const scrollAmount = containerWidth - padding + marginRight;

      smoothScroll(element, scrollAmount);
    }
  };

  const sliderLeft = (element: HTMLDivElement | null) => {
    if (element) {
      const containerWidth = element.clientWidth;
      const padding = 64 * 2; 
      const marginRight = 21; 
      const scrollAmount = -(containerWidth - padding + marginRight);

      smoothScroll(element, scrollAmount);
    }
  };

  const smoothScroll = (element: HTMLDivElement, scrollAmount: number) => {
    const startTime = performance.now();
    const duration = 500; 

    const start = element.scrollLeft;
    const end = start + scrollAmount;
    const distance = end - start;

    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      element.scrollLeft = easeInOut(elapsedTime, start, distance, duration);

      if (elapsedTime < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const easeInOut = (
    currentTime: number,
    startValue: number,
    changeInValue: number,
    duration: number
  ) => {
    currentTime /= duration / 2;
    if (currentTime < 1) {
      return (changeInValue / 2) * currentTime * currentTime + startValue;
    }
    currentTime--;
    return (
      (-changeInValue / 2) * (currentTime * (currentTime - 2) - 1) + startValue
    );
  };

  return (
    <div className="relative">
      <HiChevronLeft onClick={() => sliderLeft(elementSliderRef.current)} className="hidden md:block text-white text-3xl absolute mx-8 mt-[155px] cursor-pointer" />
      
      <HiChevronRight onClick={() => sliderRight(elementSliderRef.current)} className="hidden md:block text-white text-3xl absolute mx-8 mt-[155px] cursor-pointer right-0" />

      <div ref={elementSliderRef} className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide">
        {movieList.map((item, index) => (
          <img
            key={item.id}
            src={imageBaseUrl + item.backdrop_path}
            alt={item.title}
            className={`min-w-full md:h-[310px] object-cover object-left-top rounded-lg ${index < movieList.length - 1 ? 'mr-5' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
