import React from "react";

const SearchForm = ({ onSearchHandler, filter }) => {
  return (
    <label className="searchFormLabel">
      Find contacts by name
      <input
        className="searchField"
        type="text"
        name="name"
        placeholder="enter name"
        value={filter}
        onChange={onSearchHandler}
      />
    </label>
  );
};

export default SearchForm;
