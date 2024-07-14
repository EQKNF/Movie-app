import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const delayScrollToTop = () => {
      setTimeout(() => {
        const element = document.getElementById("top-of-content");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 0);
    };

    const handleScroll = () => {
      if (document.readyState === "complete") {
        delayScrollToTop();
      } else {
        window.requestAnimationFrame(handleScroll);
      }
    };

    handleScroll();
  }, [pathname]);

  return null;
};

export default ScrollToTop;
