// Hooks
import { useEffect } from "react";

const useOverflow = (overflowContainer, state) => {
  useEffect(() => {
    const checkOverflow = () => {
      if (overflowContainer.current) {
        overflowContainer?.current.scrollWidth > overflowContainer.current.clientWidth ? state(true) : state(false);
      }
    };

    setTimeout(checkOverflow, 100);
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);
};

export default useOverflow;
