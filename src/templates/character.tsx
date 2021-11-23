import React from "react";
import { graphql } from "gatsby";
import { Character } from "../models";
export const query = graphql`
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
const character = ({ data }: any) => {
  const character = data.aniList.Page.characters[0] as Character;
  console.log(character.age);
  return <div>HelloWorld</div>;
};

export default character;
