import { useState, useEffect } from "react";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import logo from "./../assets/images/logo2.png";

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
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [isHovered]);

  return (
    <div className="flex items-center justify-between pt-3 pb-4 px-2 bg-[#080404] fixed z-40 w-full ">
      <div className="flex gap-8 items-center">
        <a href="#">
          <img src={logo} alt="Disnot logo" className="w-[160px]" />
        </a>

        <div className="hidden 2xl:flex gap-8">
          {menu.map((item) => (
            <HeaderItem
              name={item.name}
              key={`header ${item.name}`}
              Icon={item.icon}
            />
          ))}
        </div>

        <div className="hidden lg:flex 2xl:hidden gap-5">
          {menu.map((item) => (
            <HeaderItem name={""} Icon={item.icon} />
          ))}
        </div>

        <div className="flex lg:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.icon} />
          )}

          <div
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
                  index > 2 && <HeaderItem name={item.name} Icon={item.icon} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex mr-3 items-center justify-between">
        <h2 className="text-white mr-4 font-normal hidden 2xl:block">User</h2>
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          alt="user-avatar-icon"
          className="w-[48px] rounded-full"
        />
      </div>
    </div>
  );
}

export default Header;
