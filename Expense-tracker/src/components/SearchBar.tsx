import React from "react";

interface SearchBarProps {
  search: string;
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search expenses..."
      value={search}
      onChange={(e) => onSearch(e.target.value)}
      style={{ marginBottom: "20px", width: "100%", padding: "10px" }}
    />
  );
};

export default SearchBar;


