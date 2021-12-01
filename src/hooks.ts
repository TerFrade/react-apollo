import { useQuery } from "@apollo/client";
import { Character } from "./models";
import { GET_CHARACTERS } from "./queries";

export function getCharacters() {
  const { loading, data, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: {
      page: 1,
      perPage: 10,
    },
  });

  const results = {
    loading: loading,
    data: <Character[]>data?.Page.characters,
    fetchMore,
  };

  return results;
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
