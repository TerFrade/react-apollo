import React, { useState } from "react";
import { getCharacters } from "../hooks";
import { CharacterCard } from "../components/CharacterCard";

export const CharacterList: React.FC = () => {
  const [page, setPage] = useState(2);
  const { loading, data: characters, fetchMore } = getCharacters();
  if (loading) return <div>Getting characeters</div>;

  const jesus = () => {
    fetchMore({
      variables: {
        page: page,
      },
    }).then((res) => {
      setPage(page + 1);
    });
  };
  return (
    <div className="list">
      {characters.map((character) => {
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
      <button onClick={jesus}>Click me</button>
    </div>
  );
};
