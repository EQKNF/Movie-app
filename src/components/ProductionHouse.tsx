import { useRef } from "react";
import disney from "./../assets/images/disney.png";
import marvel from "./../assets/images/marvel.png";
import nationalG from "./../assets/images/nationalG.png";
import pixar from "./../assets/images/pixar.png";
import starwar from "./../assets/images/starwar.png";

import starwarV from "./../assets/videos/star-wars.mp4";
import disneyV from "./../assets/videos/disney.mp4";
import marvelV from "./../assets/videos/marvel.mp4";
import nationalGeographicV from "./../assets/videos/national-geographic.mp4";
import pixarV from "./../assets/videos/pixar.mp4";

interface ProductionHouseItem {
  id: number;
  image: string;
  video: string;
}

const productionHouseList: ProductionHouseItem[] = [
  { id: 1, image: disney, video: disneyV },
  { id: 2, image: pixar, video: pixarV },
  { id: 3, image: marvel, video: marvelV },
  { id: 4, image: starwar, video: starwarV },
  { id: 5, image: nationalG, video: nationalGeographicV },
];

function ProductionHouse() {
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const handleMouseEnter = (id: number) => {
    const video = videoRefs.current[id];
    if (video) {
      video.currentTime = 0;
      video.play();
      video.style.opacity = "1";
    }
  };

  const handleMouseLeave = (id: number) => {
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
      video.currentTime = 0;
      video.style.opacity = "0";
    }
  };

  return (
    <div className="flex gap-2 md:gap-6 p-2 px-5 md:px-16">
      {productionHouseList.map((item) => (
        <div
          key={item.id}
          className="relative hover:border-[3px] border-solid border-gray-50 rounded-xl hover:scale-110 transition-all duration-300 cursor-pointer shadow-xl shadow-black"
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={() => handleMouseLeave(item.id)}
          style={{ overflow: "hidden" }}
        >
          <video
            ref={(el) => (videoRefs.current[item.id] = el)}
            src={item.video}
            muted
            loop
            autoPlay={false}
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-0 p-0.5 rounded-[11px]"
            style={{ display: "block" }}
          />
          <img
            src={item.image}
            className="relative z-10 w-full h-full p-0.5"
            style={{ display: "block", pointerEvents: "none" }}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
