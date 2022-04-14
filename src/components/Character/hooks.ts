import { useQuery } from "@apollo/client";
import { Character } from "../../models";
import { GET_CHARACTERS } from "../../queries";

export function useCharacters() {
  const { loading, data, fetchMore, networkStatus } = useQuery(GET_CHARACTERS, {
    variables: {
      page: 1,
      perPage: 20,
      search: null,
      sort: "FAVOURITES_DESC",
    },
  });

  const results = {
    loading: loading,
    data: <Character[]>data?.Page.characters,
    fetchMore,
  };

  return results;
}
