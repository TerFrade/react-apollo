import React, { useState } from "react";
import { Character } from "../../models";
import { getCharacters, useInfiniteScroll } from "../../hooks";
import CharacterCard from "./CharacterCard";
import SearchBar from "../SearchBar";

const CharacterList: React.FC = () => {
  const [page, setPage] = useState(2);
  const { loading, data: characters, fetchMore } = getCharacters();
  const [isFetching, setIsFetching] = useInfiniteScroll(loadMorePages);

  console.log(characters);

  if (loading) return <div>Getting characeters..</div>;

  async function loadMorePages() {
    if (!loading && isFetching) {
      await fetchMore({
        variables: {
          page: page,
        },
        updateQuery: (previousResult: any, { fetchMoreResult }) => {
          fetchMoreResult.Page.characters = [...previousResult.Page.characters, ...fetchMoreResult.Page.characters];
          return fetchMoreResult;
        },
      }).then(() => {
        setPage((prevPage: number) => prevPage + 1);
        setIsFetching(false);
      });
    }
  }

  function searchCharacters(search: string | null) {
    fetchMore({
      variables: {
        page: 1,
        search: search,
        sort: search == null ? "FAVOURITES_DESC" : "SEARCH_MATCH",
      },
      updateQuery: (previousResult: any, { fetchMoreResult }) => {
        fetchMoreResult.Page.characters = [...fetchMoreResult.Page.characters];
        return fetchMoreResult;
      },
    });
  }

  return (
    <>
      <SearchBar searchCharacters={searchCharacters} />
      <div className="list">
        {characters.length > 0 ? (
          characters.map((character: Character) => {
            return <CharacterCard character={character} />;
          })
        ) : (
          <div>No characters found...</div>
        )}
      </div>
    </>
  );
};

export default CharacterList;
