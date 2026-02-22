import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    isMobile: false,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        isMobile: Number(window.innerWidth) < 768 ? true : false,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Ejecutar al montar

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
