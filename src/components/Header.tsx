import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import profile from "./../assets/images/profile-icon.png";

function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
    { name: "ORIGINALS", icon: HiStar },
  ];

  const profileDropMenu = [
    { name: "Edit profiles" },
    { name: "App settings" },
    { name: "Account" },
    { name: "Help" },
    { name: "Sign out" },
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex items-center justify-between pt-3 pb-4 px-2 fixed z-40 w-full transition-all duration-300 ease-in ${
        isScrolled ? "bg-[#080404]" : "bg-transparent"
      }`}
    >
      <div className="flex gap-8 items-center">
        <a href="#" onClick={() => navigate("/")}>
          <img src={logo} alt="Disnot logo" className="w-[160px]" />
        </a>

        <div className="hidden 2xl:flex gap-8">
          {menu.map((item) => (
            <HeaderItem
              name={item.name}
              key={`header-2xl-${item.name}`}
              Icon={item.icon}
            />
          ))}
        </div>

        <div className="hidden lg:flex 2xl:hidden gap-5">
          {menu.map((item) => (
            <HeaderItem
              key={`header-lg-${item.name}`}
              name={""}
              Icon={item.icon}
            />
          ))}
        </div>

        <div className="flex lg:hidden gap-5">
          {menu.slice(0, 3).map((item, index) => (
            <HeaderItem
              key={`header-mobile-${item.name}-${index}`}
              name={""}
              Icon={item.icon}
            />
          ))}

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
              {menu.slice(3).map((item, index) => (
                <HeaderItem
                  key={`dropdown-${item.name}-${index}`}
                  name={item.name}
                  Icon={item.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex mr-4 items-center justify-between z-30">
        <h2 className="text-white mr-4 font-normal hidden 2xl:block">User</h2>
        <img
          src={profile}
          alt="user-avatar-icon"
          className="w-[50px] rounded-full mt-1"
        />
      </div>

      <div className="absolute top-0 right-0 bg-[#121212] border border-gray-600 rounded-md pt-[82px] pb-[40px] px-5 space-y-5 -translate-y-[450px]">
        <hr className="solid px-[110px] border-gray-600 mb-5" />
        <div className="flex flex-row items-center space-x-4 text-white cursor-pointer">
          <div className="flex items-center justify-center w-12 h-12 bg-zinc-700 rounded-full text-5xl font-thin hover:bg-zinc-600">
            <span className="-translate-y-[6px]">+</span>
          </div>
          <h2>Add profile</h2>
        </div>
        <div className="space-y-5">
          {profileDropMenu.map((item, index) => (
            <div
              key={`profileDropMenu-${index}`}
              className="inset-0 text-white rounded-md cursor-pointer text-left"
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
