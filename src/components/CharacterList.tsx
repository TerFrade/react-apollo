import React from "react";
import { getCharacters } from "../hooks";
import { CharacterCard } from "../components/CharacterCard";

export const CharacterList: React.FC = () => {
  const { loading, data: characters } = getCharacters();
  if (loading) return <div>Getting characeters</div>;

  return (
    <div className="list">
      {characters.map((character, index) => {
        return (
          <CharacterCard
            key={character.id}
            id={character.id}
            fullname={character.name.full}
            age={character.age}
            gender={character.gender}
            bloodType={character.bloodType}
            image={character.image.large}
            showTitle={character.media.edges[0].node.title.userPreferred}
          />
        );
      })}
    </div>
  );
};
