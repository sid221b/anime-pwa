import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import SearchBar from "../assets/reusable/searchBar";
import LibraryItemCard from "../assets/reusable/libraryItemCard";

import { theme } from "../../theme/dark";

const StyledAnimeLibrary = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.darkColor1};
  padding-top: 1rem;
`;

const StyledItemList = styled.ul`
  margin: 0;
  padding: 1.5rem 1rem 1rem 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const END_POINT = "https://api.jikan.moe/v3/search/anime";
const memorySearchTerm = localStorage.getItem("lib-search-term");

const AnimeLibrary = () => {
  const [searchTerm, setSearchTerm] = useState(
    memorySearchTerm ? memorySearchTerm : ""
  );
  const [data, setData] = useState([
    {
      mal_id: 22199,
      url: "https://myanimelist.net/anime/22199/Akame_ga_Kill",
      image_url:
        "https://cdn.myanimelist.net/images/anime/1429/95946.jpg?s=54a1d4bcd881957ce164297f36df5a72",
      title: "Akame ga Kill!",
      synopsis:
        "Night Raid is the covert assassination branch of the Revolutionary Army, an uprising assembled to overthrow Prime Minister Honest, whose avarice and greed for power has led him to take advantage of th..."
    },
    {
      mal_id: 26449,
      url: "https://myanimelist.net/anime/26449/Akame_ga_Kill_Recap",
      image_url:
        "https://cdn.myanimelist.net/images/anime/1567/102409.jpg?s=e8e0ad787dfb697a4d7d75706d7bbd7f",
      title: "Akame ga Kill! Recap",
      synopsis:
        "Night Raid is the covert assassination branch of the Revolutionary Army, an uprising assembled to overthrow Prime Minister Honest, whose avarice and greed for power has led him to take advantage of th..."
    },
    {
      mal_id: 25241,
      url: "https://myanimelist.net/anime/25241/Akame_ga_Kill__AkaKill_Gekijou",
      image_url:
        "https://cdn.myanimelist.net/images/anime/6/64537.jpg?s=97d70a4edb9497f8f58b9774b56bfd94",
      title: "Akame ga Kill!: AkaKill! Gekijou",
      synopsis:
        "Night Raid is the covert assassination branch of the Revolutionary Army, an uprising assembled to overthrow Prime Minister Honest, whose avarice and greed for power has led him to take advantage of th..."
    }
  ]);
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setSearchTerm(e.target.value);
    localStorage.setItem("lib-search-term", e.target.value);
  };

  const handleSearch = () => {
    console.log("searched for  ", searchTerm);
    setLoading(true);
    axios
      .get(`${END_POINT}?q=${searchTerm}&limit=10`)
      .then(res => {
        console.log(res);
        setData(res.data.results);
        setLoading(false);
      })
      .catch(err => {
        console.log(err.data);
        setLoading(false);
      });
  };

  return (
    <StyledAnimeLibrary>
      <SearchBar
        handleSearch={handleSearch}
        handleChange={handleChange}
        placeholder="Enter the Anime you want to search"
        defaultVal={searchTerm}
      />

      {searchTerm && (
        <div className="search-keyword-desc">{`You have searched for anime "${searchTerm}"`}</div>
      )}
      {loading && <div className="list-loading">Loading...</div>}
      <StyledItemList>
        {data &&
          data.map(item => <LibraryItemCard key={item.mal_id} {...item} />)}
      </StyledItemList>
    </StyledAnimeLibrary>
  );
};

export default AnimeLibrary;
