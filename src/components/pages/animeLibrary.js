import React, { useState } from "react";
import styled from "styled-components";

// import getWindowSize from "../../assets/getWindowSize";
import { theme } from "../../theme/dark";

const StyledAnimeLibrary = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.darkColor1};
  .search-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    input {
      width: 80%;
      background-color: #aaaaaa;
      height: 2.3rem;
      font-size: 14px;
      border: none;
    }
    button {
      height: 2.5rem;
      width: 3rem;
      font-size: 14px;
      border: none;
      background: ${theme.darkBg3};
      img {
        z-index: 10;
        height: 1.7rem;
        width: 1.7rem;
        filter: brightness(200%) invert(1);
      }
    }
  }
`;

const AnimeLibrary = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = e => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log("searched for  ", searchTerm);
  };

  return (
    <StyledAnimeLibrary>
      <div>Anime Library Page</div>
      <div className="search-container">
        <input
          onChange={handleChange}
          value={searchTerm}
          placeholder="Enter the Anime you want to search"
        />
        <button onClick={handleSearch} className="search-button">
          <img src="/static/images/search.svg" alt=">" />
        </button>
      </div>
      <div className="search-keyword-desc">{`You have searched for anime "${searchTerm}"`}</div>
    </StyledAnimeLibrary>
  );
};

export default AnimeLibrary;
