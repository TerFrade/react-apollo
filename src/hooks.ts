import { useQuery, gql } from "@apollo/client";
import { Character } from "./models";

// Ultimately you can extract this into its own file called queries.ts and import it.
const GET_CHARACTERS = gql`
  query Query {
    Page {
      characters {
        name {
          full
        }
        image {
          medium
        }
        gender
        age
        bloodType
      }
    }
  }
`;

export function getCharacters() {
  const { loading, data } = useQuery(GET_CHARACTERS);
  const results = {
    loading: loading,
    data: <Character[]>data?.Page.characters,
  };
  return results;
}
