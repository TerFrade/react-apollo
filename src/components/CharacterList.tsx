import React from "react";
import { getCharacters } from "../hooks";
import { CharacterItem } from "./CharacterItem";

export const CharacterList: React.FC = () => {
  const { loading, data: characters } = getCharacters();
  if (loading) return <div>Getting characeters</div>;

  return (
    <div className="list">
      {characters.map((character, index) => {
        return (
          <div key={index}>
            <CharacterItem
              fullname={character.name.full}
              age={character.age}
              gender={character.gender}
              bloodType={character.bloodType}
              image={character.image.medium}
            />
          </div>
        );
      })}
    </div>
  );
};
