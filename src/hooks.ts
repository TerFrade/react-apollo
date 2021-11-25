import { useQuery, gql } from "@apollo/client";
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
