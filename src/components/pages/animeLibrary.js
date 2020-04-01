import React, { useState } from "react";
import styled from "styled-components";

// import getWindowSize from "../../assets/getWindowSize";
import {theme} from "../../theme/dark"

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
      i {
        z-index: 10;
        height: 2rem;
        width: 2rem;
        font-size: 2rem;
      }
          /* .fa-search {
          } */
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
          <i class="fa fa-search fa-3x" ></i>
        </button>
      </div>
      <div className="search-keyword-desc">{`You have searched for anime "${searchTerm}"`}</div>
    </StyledAnimeLibrary>
  );
};

export default AnimeLibrary;
