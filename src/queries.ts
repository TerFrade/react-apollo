import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int = 1, $id: Int, $search: String, $sort: [CharacterSort] = [FAVOURITES_DESC]) {
    Page(page: $page, perPage: 20) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      characters(id: $id, search: $search, sort: $sort) {
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

// variables: {page: 1, type: "CHARACTERS", search: "l", sort: "SEARCH_MATCH"}

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
