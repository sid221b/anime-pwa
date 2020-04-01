import { useEffect, useState } from "react";

export function debounce(fn, ms) {
    let timer
    return () => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    };
  }

const GetWindowSize = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

const debouncedResize = debounce( function handleResize() {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth
    });
    if (window.innerWidth < 500 && isMobile === false) {
      setIsMobile(true);
    }
    if (window.innerWidth > 500 && isMobile === true) {
      setIsMobile(false);
    }
  }, 700)

  useEffect(() => {
    window.addEventListener("resize", debouncedResize);
    return () => window.removeEventListener("resize", debouncedResize);
  });
  return { dimensions, isMobile };
};

export default GetWindowSize;
