import { useState, useLayoutEffect } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  function changeWindowLoad() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useLayoutEffect(() => {
    window.addEventListener("resize", changeWindowSize);
    if (document.readyState === "complete") {
      changeWindowLoad();
    } else {
      window.addEventListener("load", changeWindowLoad);
    }

    return () => {
      window.removeEventListener("resize", changeWindowSize);
      window.removeEventListener("load", changeWindowLoad);
    };
  }, []);

  return windowSize;
}
