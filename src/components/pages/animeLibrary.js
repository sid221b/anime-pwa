import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "../assets/reusable/searchBar";

// import getWindowSize from "../../assets/getWindowSize";
import { theme } from "../../theme/dark";

const StyledAnimeLibrary = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.darkColor1};
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
      <SearchBar
        handleSearch={handleSearch}
        handleChange={handleChange}
        placeholder="Enter the Anime you want to search"
      />
      <div className="search-keyword-desc">{`You have searched for anime "${searchTerm}"`}</div>
    </StyledAnimeLibrary>
  );
};

export default AnimeLibrary;
