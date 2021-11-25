import { useQuery } from "@apollo/client";
import { Character } from "./models";
import { GET_CHARACTERS } from "./queries";

export function getCharacters() {
  const { loading, data } = useQuery(GET_CHARACTERS);
  const results = {
    loading: loading,
    data: <Character[]>data?.Page.characters,
  };
  return results;
}

export function getBloodTypeColor(bloodType: string): string {
  switch (bloodType) {
    case "A":
      return "#fb312b";
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
