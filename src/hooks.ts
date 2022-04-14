import { useEffect, useState } from "react";

export function useInfiniteScroll(callback: () => {}) {
  const [isFetching, setIsFetching] = useState(false);

  function scrollEvent() {
    if (!isFetching) {
      const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent >= 60) {
        setIsFetching(true);
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  useEffect(() => {
    callback();
  }, [isFetching]);

  return [isFetching, setIsFetching] as const;
}

//this belongs in a utils file but this is fine for now.
