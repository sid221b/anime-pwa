import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import { theme } from "../../theme/dark";

const ANIME_LIST_END_POINT =
  "https://script.googleusercontent.com/macros/echo?user_content_key=RohPKX-wejZH0EVBje03O6_DXcO4psIkgECEr6zo6PapCkGxfduZBKuS9L2p1zRGzu6YDiCKDN0cj18dUGKzyRZPsYyrO8VOm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCWMausXWZkEbbicUDIl-G8qj9DJ7NZIMh5T7hYhPHASW-ABMhMc6BR1HLuQ0P6slk7abYKbJKZs&lib=MTzk6xjIUwnNtuz7HcgI7n0r-crY8VMB6";

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
  li {
    width: 100%;
    height: 2.5rem;
    margin: 0.4rem 0;
    padding: 0;
    line-height: 210%;
    text-decoration: none;
    list-style: none;
    background: ${theme.darkBg3};
  }
`;

const AnimeList = () => {
  const [availableAnimeList, setAnimeList] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    if (availableAnimeList == null) {
      console.log("no value:   ", availableAnimeList);
      axios
        .get(ANIME_LIST_END_POINT, {
          headers: { "Access-Control-Allow-Origin": "*", 
          "crossDomain": true }
        })
        .then(
          ({ data }) => {
            const res = data.animeList;

            setAnimeList(res);
            console.log(res);
          },
          error => {
            console.log("New Error Caught:  ", error);
          }
        );
    } else {
      console.log("not nulll ", availableAnimeList);
    }
  });

  const getSortedList = list => {
    return list.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );
  };

  return (
    <StyledAnimeListContainer>
      {availableAnimeList != null && (
        <StyledAnimeList>
          {getSortedList(availableAnimeList).map(
            ({ name, telegramLink, id }) => {
              return <li key={id}>{name}</li>;
            }
          )}
        </StyledAnimeList>
      )}
    </StyledAnimeListContainer>
  );
};

export default AnimeList;
