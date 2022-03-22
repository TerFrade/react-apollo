import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Character } from "./models";
import { GET_CHARACTERS } from "./queries";

export function getCharacters() {
  const { loading, data, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: {
      page: 1,
      perPage: 15,
    },
  });

  const results = {
    loading: loading,
    data: <Character[]>data?.Page.characters,
    fetchMore,
  };

  return results;
}

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
export function getBloodTypeColor(bloodType: string): string {
  switch (bloodType) {
    case "A":
      return "#f1221b";
    case "B":
      return "#12cd2c";
    case "AB":
      return "#b41174";
    case "O":
      return "#070b0d";
    case "F":
      return "#f3600d";
    default:
      return "#03446a";
  }
}
