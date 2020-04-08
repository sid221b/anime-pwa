import React, { useState } from "react";
import styled from "styled-components";

import ListItemTeleCard from "../assets/reusable/listCard";
import SearchBar from "../assets/reusable/searchBar";

import { animeSeriesList } from "../assets/data-list/anime-list/animeSeriesList";
import { theme } from "../../theme/dark";

const StyledAnimeListContainer = styled.div`
  flex-grow: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
  padding-top: 1rem;

  div.listInfo {
    padding: 0 1.3rem 1rem 1.2rem;
    color: ${theme.darkColor3};
    font-size: 15px;
    text-align: justify;
  }
`;

const StyledAnimeList = styled.ul`
  color: ${theme.darkColor1};
  font-size: 18px;
  font-weight: 400;
  width: 90%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const getSortedList = list => {
  return list.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );
};

const AnimeList = () => {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("animeSeriesSearchTerm")
  );
  const [availableAnimeList, setAnimeList] = useState(
    getSortedList(animeSeriesList.filter(itm => itm.name.includes(searchTerm)))
  );
  const [loading, setLoading] = useState();

  const handleChange = e => {
    setSearchTerm(e.target.value);
    localStorage.setItem("animeSeriesSearchTerm", e.target.value);

    setAnimeList(
      getSortedList(
        animeSeriesList.filter(itm => itm.name.includes(searchTerm))
      )
    );
    if (e.target.value.length === 0) {
      console.log(searchTerm.length);
      setAnimeList(getSortedList(animeSeriesList));
    }
  };

  const handleSearch = () => {
    console.log("searched for  ", searchTerm);
  };

  console.log(availableAnimeList.length)
  console.log((availableAnimeList === 0))

  return (
    <StyledAnimeListContainer>
      <SearchBar
        handleSearch={handleSearch}
        handleChange={handleChange}
        placeholder="Enter Anime you want to search..."
        defaultVal="animeSeriesSearchTerm"
      />
      <div className="listInfo">
        ** Do note that this listing contains only available on Telegram and
        only searches the anime titles and uses only english names. If you are
        not sure about english name look it up on web.
      </div>
      {searchTerm && <div>{`Search result for "${searchTerm}"`}</div>}
      {(availableAnimeList !== null || availableAnimeList !== 0 || availableAnimeList !== undefined) ? (
        <StyledAnimeList>
          {getSortedList(availableAnimeList).map((data, index) => (
            <ListItemTeleCard {...data} key={index} />
          ))}
        </StyledAnimeList>
      ) : (
        <div className="NoContentList">Looks like nothing is here...</div>
      )}
    </StyledAnimeListContainer>
  );
};

export default AnimeList;
