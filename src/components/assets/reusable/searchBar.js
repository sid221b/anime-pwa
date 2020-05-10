import React, { useState } from "react";
import styled from "styled-components";

import { theme } from "../../../theme/dark";

const StyledSearchBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.7rem;
  margin-top: 1rem;
  .input-container {
    width: 100%;
    position: relative;
    margin: 0 1.2rem 0 1rem;
    input {
      width: 100%;
      height: 2.3rem;
      padding-left: 0.5rem;
      background-color: #aaaaaa;
      font-size: 18px;
      color: #0f0f0f;
      border: none;
      z-index: 10;
      &:focus {
        outline: none;
      }
    }
    i {
      right: 8px;
      top: 13px;
      position: absolute;
      z-index: 99999999;
      cursor: pointer;
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
    cursor: pointer;
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

const SearchBar = ({
  handleChange,
  placeholder,
  handleSearch,
  defaultVal,
  handleClearAll,
}) => {
  const [showClearBtn] = useState(true);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleClearText = () => {
    handleClearAll();
  };

  return (
    <StyledSearchBar>
      <div className="input-container">
        <input
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          value={defaultVal}
        />
        {showClearBtn && defaultVal && (
          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={handleClearText}
          ></i>
        )}
      </div>
      <button onClick={handleSearch} className="search-button">
        <img src="/static/images/search.svg" alt=">" />
      </button>
    </StyledSearchBar>
  );
};

export default SearchBar;
