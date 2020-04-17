import React from "react";
import styled from "styled-components";

import { theme } from "../../../theme/dark";

const StyledSearchBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 0.7rem;
  margin-top: 1rem;
  input {
    width: 100%;
    margin: 0 1.2rem 0 1rem;
    height: 2.3rem;
    position: relative;
    padding-left: 0.5rem;
    background-color: #aaaaaa;
    font-size: 18px;
    color: #0f0f0f;
    border: none;
    &:focus {
      outline: none;
    }
  }
  button {
    position: relative;
    height: 2.5rem;
    width: 3.5rem;
    right: 1.2rem;
    border: none;
    text-align: center;
    font-size: 14px;
    background: ${theme.darkBg3};
    &:focus {
      outline: none;
    }
    img {
      height: 1.7rem;
      width: 1.7rem;
      filter: brightness(200%) invert(1);
    }
  }
`;

const SearchBar = ({ handleChange, placeholder, handleSearch, defaultVal }) => {
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <StyledSearchBar>
      <input
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        defaultValue={defaultVal}
      />
      <button onClick={handleSearch} className="search-button">
        <img src="/static/images/search.svg" alt=">" />
      </button>
    </StyledSearchBar>
  );
};

export default SearchBar;
