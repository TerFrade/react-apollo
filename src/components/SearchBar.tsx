import React, { useEffect, useState } from "react";
type Props = {
  searchCharacters(search: string | null): void;
};
const SearchBar: React.FC<Props> = ({ searchCharacters }: Props) => {
  const [search, setSearch] = useState(null);

  function handleSearchChange(e: any) {
    const searchValue = e.target.value;
    setSearch((prevState) => (prevState = searchValue != "" ? searchValue : null));
  }

  useEffect(() => {
    searchCharacters(search);
  }, [search]);

  return (
    <div className="searchBar">
      <input type="text" placeholder="Search for a Character..." onChange={handleSearchChange} />
    </div>
  );
};

export default SearchBar;
