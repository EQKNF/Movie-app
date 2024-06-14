import React, { useState, useEffect } from "react";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
  ];

  useEffect(() => {
    if (isHovered) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 500); // Match this duration with the CSS transition duration

      return () => clearTimeout(timeout);
    }
  }, [isHovered]);

  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-8 items-center">
        <div className="w-[80px] md:w-[115px] object-cover">Disnot-</div>
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>

        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem key={item.name} name={""} Icon={item.icon} />
              )
          )}
        </div>

        <div
          className="md:hidden relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <HeaderItem name={""} Icon={HiDotsVertical} />
          <div
            className={`absolute mt-3 bg-[#121212] border-[1px] border-gray-800 rounded-md py-4 pl-5 pr-10 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            } ${isVisible ? "visible" : "invisible"}`}
          >
            {menu.map(
              (item, index) =>
                index > 2 && (
                  <HeaderItem
                    key={item.name}
                    name={item.name}
                    Icon={item.icon}
                  />
                )
            )}
          </div>
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        alt="user-avatar-icon"
        className="w-10 rounded-full"
      />
    </div>
  );
}

export default Header;
