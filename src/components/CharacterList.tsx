import React from "react";
import { getCharacters } from "../hooks";

export const CharacterList: React.FC = () => {
  const { loading, data: characters } = getCharacters();
  if (loading) return <div>Getting characeters</div>;

  return (
    <div>
      {characters.map((character, index) => {
        return (
          <li key={index}>
            <img
              src={character.image.medium}
              alt={character.name.full}
              width="100"
              height="150"
            />
          </li>
        );
      })}
    </div>
  );
};
