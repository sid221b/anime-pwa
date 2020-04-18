import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactGA from "react-ga";

import ListItemTeleCard from "../assets/reusable/listCard";
import SearchBar from "../assets/reusable/searchBar";
import PopupModel from "../assets/reusable/popupModel";

import { animeSeriesList } from "../assets/data-list/anime-list/animeSeriesList";
import { animeMoviesList } from "../assets/data-list/anime-list/animeMovieList";
import { theme } from "../../theme/dark";

const availableAnime = animeSeriesList.concat(animeMoviesList);

const StyledAnimeListContainer = styled.div`
  flex-grow: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
  position: relative;

  div.listInfo {
    padding: 0 1.3rem 1rem 1.2rem;
    color: ${theme.darkColor3};
    font-size: 15px;
    text-align: justify;
    strong {
      color: ${theme.darkColor2};
      text-transform: uppercase;
    }
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

const getSortedList = (list) => {
  if (list) {
    return list.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );
  }
  return null;
};

const searchList = (list, term) => {
  if (list && term) {
    return list.filter((itm) =>
      itm.name.toUpperCase().includes(term.toUpperCase())
    );
  }
  return null;
};

const AnimeList = () => {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("animeSeriesSearchTerm")
  );
  const [availableAnimeList, setAnimeList] = useState(
    getSortedList(availableAnime)
  );
  const [openModal, setModalOpen] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      setAnimeList(getSortedList(searchList(availableAnime, searchTerm)));
    }
  }, [searchTerm]);

  const handleModal = (mal_id, name, telegramLink) => {
    setModalOpen(!openModal);
    if (mal_id) {
      localStorage.setItem("tele_list_anime_mal_id", mal_id);
      // localStorage.setItem("tele_list_anime_name", name);
      localStorage.setItem("tele_list_anime_tele_link", telegramLink);
    }
    ReactGA.event({
      category: "Visited MAL Report in Tele list",
      action: `visited post`,
    });
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    localStorage.setItem("animeSeriesSearchTerm", e.target.value);
    setAnimeList(getSortedList(searchList(availableAnime, searchTerm)));
  };

  const handleSearch = () => {
    console.log("searched for  ", searchTerm);
  };

  return (
    <StyledAnimeListContainer>
      {openModal && (
        <PopupModel toggleOpenModal={handleModal} mode={"tele_list"} />
      )}
      <SearchBar
        handleSearch={handleSearch}
        handleChange={handleChange}
        placeholder="Enter Anime you want to search..."
        defaultVal={searchTerm}
      />
      <div className="listInfo">
        ** Do note that{" "}
        <strong>this listing contains only available anime on Telegram</strong>{" "}
        and only searches the anime titles and uses only english names. If you
        are not sure about english name look it up on web.
      </div>
      {searchTerm && <div>{`Search result for "${searchTerm}"`}</div>}
      {availableAnimeList ? (
        <StyledAnimeList>
          {getSortedList(availableAnimeList).map((data, index) => (
            <ListItemTeleCard openModal={handleModal} {...data} key={index} />
          ))}
        </StyledAnimeList>
      ) : (
        <div className="NoContentList">Looks like nothing is here...</div>
      )}
    </StyledAnimeListContainer>
  );
};

export default AnimeList;
