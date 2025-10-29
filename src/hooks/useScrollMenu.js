import { useEffect } from "react";

export function useScrollMenu(close, listenCapture = true) {
  useEffect(
    function () {
      function handleScroll() {
        close();
      }

      document.addEventListener("scroll", handleScroll, true);

      return () =>
        document.removeEventListener("scroll", handleScroll, listenCapture);
    },
    [close, listenCapture]
  );
}
