import { useEffect, useRef } from "react";

export function useOutsideClick(close, listenCapture = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClickOutside(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          close();
        }
      }

      document.addEventListener("click", handleClickOutside, listenCapture);

      return () => {
        document.removeEventListener(
          "click",
          handleClickOutside,
          listenCapture
        );
      };
    },
    [close, listenCapture]
  );

  return { ref };
}
