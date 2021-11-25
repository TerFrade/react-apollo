import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query Query {
    Page {
      characters {
        id
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

export const GET_CHARACTER = gql`
  query ($charactersId: Int) {
    aniList {
      Page {
        characters(id: $charactersId) {
          name {
            full
          }
          image {
            medium
          }
          description
          gender
          age
          bloodType
        }
      }
    }
  }
`;
