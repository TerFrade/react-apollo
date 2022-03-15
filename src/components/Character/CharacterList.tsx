import React, { useState } from "react";
import { Character } from "../../models";
import { getCharacters, useInfiniteScroll } from "../../hooks";
import CharacterCard from "./CharacterCard";

const CharacterList: React.FC = () => {
  const [page, setPage] = useState(2);
  const { loading, data: characters, fetchMore } = getCharacters();
  const [isFetching, setIsFetching] = useInfiniteScroll(loadMore);

  if (loading) return <div>Getting characeters...</div>;

  async function loadMore() {
    if (!loading && isFetching) {
      await fetchMore({
        variables: {
          page: page,
        },
        updateQuery: (previousResult: any, { fetchMoreResult }) => {
          console.log(previousResult, fetchMoreResult);
          fetchMoreResult.Page.characters = [...previousResult.Page.characters, ...fetchMoreResult.Page.characters];
          return fetchMoreResult;
        },
      }).then(() => {
        setPage((prevPage: number) => prevPage + 1);
      });
    }
    setIsFetching(false);
  }

  return (
    <div className="list">
      {characters.map((character: Character) => {
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

export default CharacterList;
