import { useState, useEffect } from "react";

const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    //set event listener with the current window size
    window.addEventListener("resize", handleWindowResize);
    //clean-up of event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width, setWidth };
};

export default useViewport;