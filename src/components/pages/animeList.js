import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import ListItemTeleCard from "../assets/reusable/listCard";

import { animeSeriesList } from "../assets/data-list/anime-list/animeSeriesList";
import { theme } from "../../theme/dark";

const StyledAnimeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  color: ${theme.darkColor1};
`;

const StyledAnimeList = styled.ul`
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
  const [availableAnimeList, setAnimeList] = useState(
    getSortedList(animeSeriesList)
  );
  const [loading, setLoading] = useState();

  return (
    <StyledAnimeListContainer>
      {availableAnimeList != null ? (
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
