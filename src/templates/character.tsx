import React from "react";
import { graphql } from "gatsby";
import { Character } from "../models";
import { CharacterSection } from "../components/Character";

export const query = graphql`
  query ($charactersId: Int) {
    aniList {
      Page {
        characters(id: $charactersId) {
          name {
            full
          }
          image {
            large
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

const character = ({ data }: any) => {
  const character = data.aniList.Page.characters[0] as Character;
  return <CharacterSection character={character} />;
};

export default character;
