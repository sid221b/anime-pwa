import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ReactGA from "react-ga";

import SearchBar from "../assets/reusable/searchBar";
import LibraryItemCard from "../assets/reusable/libraryItemCard";
import PopupModel from "../assets/reusable/popupModel";

import { theme } from "../../theme/dark";

const StyledAnimeLibrary = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${theme.darkColor1};
  div.listInfo {
    padding: 0 1.3rem 1rem 1.2rem;
    color: ${theme.darkColor3};
    font-size: 13px;
    text-align: justify;
    strong {
      font-weight: 500;
      text-transform: uppercase;
    }
  }
  .stateMan {
    margin: 0;
    padding: 0 1.3rem 0 1.2rem;
  }
  .noResult {
    text-align: center;
    font-size: 20px;
  }
`;

const StyledItemList = styled.ul`
  margin: 0;
  padding: 1.5rem 1rem 1rem 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const END_POINT = "https://api.jikan.moe/v3/search/anime";
const animeLibSearchTerm = localStorage.getItem("lib-search-term");

const AnimeLibrary = () => {
  const [searchTerm, setSearchTerm] = useState(
    animeLibSearchTerm ? animeLibSearchTerm : ""
  );
  const [data, setData] = useState([
    {
      mal_id: 22199,
      url: "https://myanimelist.net/anime/22199/Akame_ga_Kill",
      image_url:
        "https://cdn.myanimelist.net/images/anime/1429/95946.jpg?s=54a1d4bcd881957ce164297f36df5a72",
      title: "Akame ga Kill!",
      airing: false,
      synopsis:
        "Night Raid is the covert assassination branch of the Revolutionary Army, an uprising assembled to overthrow Prime Minister Honest, whose avarice and greed for power has led him to take advantage of th...",
      type: "TV",
      episodes: 24,
      score: 7.65,
      start_date: "2014-07-07T00:00:00+00:00",
      end_date: "2014-12-15T00:00:00+00:00",
      members: 1066517,
      rated: "R",
    },
  ]);
  const [processing, setProcessing] = useState("NOT_PROCESSED");
  const [openModal, setModalOpen] = useState(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    localStorage.setItem("lib-search-term", e.target.value);
  };

  useEffect(() => {
    if (searchTerm && processing === "NOT_PROCESSED") {
      setProcessing("PROCESSING");
      axios
        .get(`${END_POINT}?q=${searchTerm}&limit=10`)
        .then((res) => {
          setData(res.data.results);
          setProcessing("PROCESSED");
        })
        .catch((err) => {
          console.log(err.data);
          setProcessing("FAILED");
        });
    }
  }, [searchTerm, processing]);

  const handleModal = (id) => {
    setModalOpen(!openModal);
    if (id) {
      localStorage.setItem("library_anime_mal_id", id);
    }
    ReactGA.event({
      category: "Visited MAL Report in Library",
      action: `visited post`,
    });
  };

  const handleSearch = () => {
    setProcessing("PROCESSING");
    axios
      .get(`${END_POINT}?q=${searchTerm}&limit=10`)
      .then((res) => {
        setData(res.data.results);
        setProcessing("PROCESSED");
      })
      .catch((err) => {
        console.log(err.data);
        setProcessing("FAILED");
      });

    // Google Analytics
    ReactGA.event({
      category: "Search",
      action: `anime search`,
    });
  };

  return (
    <StyledAnimeLibrary>
      {openModal && (
        <PopupModel toggleOpenModal={handleModal} mode={"library"} />
      )}
      <SearchBar
        handleSearch={handleSearch}
        handleChange={handleChange}
        placeholder="Enter the Anime you want to search"
        defaultVal={searchTerm}
      />
      <div className="listInfo">
        ** Search results are provided by <strong>MyAnimeList.com</strong> and
        only them.
      </div>
      <div className="stateMan">
        {processing === "PROCESSED" && searchTerm && (
          <div className="search-keyword-desc">{`You have searched for anime "${searchTerm}"`}</div>
        )}
        {processing === "PROCESSING" && (
          <div className="list-loading">Loading...</div>
        )}
      </div>
      <StyledItemList>
        {data &&
          data.map((item) => (
            <LibraryItemCard
              key={item.mal_id}
              openModal={handleModal}
              {...item}
            />
          ))}
        {data.length === 0 && (
          <div className="noResult">Looks line no result found!...</div>
        )}
      </StyledItemList>
    </StyledAnimeLibrary>
  );
};

export default AnimeLibrary;
