import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      characters {
        id
        name {
          full
        }
        image {
          large
        }
        gender
        age
        bloodType
        media {
          edges {
            node {
              title {
                userPreferred
              }
            }
          }
        }
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
          media {
            edges {
              node {
                title {
                  userPreferred
                }
              }
            }
          }
        }
      }
    }
  }
`;
