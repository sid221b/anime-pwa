import React from "react";
import styled from "styled-components";

import { theme } from "../../../theme/dark";

const StyledListItemCard = styled.li`
  width: 100%;
  height: 2.5rem;
  margin: 0.4rem 0;
  padding: 0 0 0 0.5rem;
  overflow: hidden;
  border-radius: 0 3px 3px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  line-height: 210%;
  text-decoration: none;
  list-style: none;
  background: ${theme.darkBg3};
  h2 {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-size: 16px;
  }
  a {
    height: 100%;
    background: ${theme.darkListBtn};
    div {
      margin: 0 0.7rem;
      height: 100%;
      display: flex;

      img {
        height: 80%;
        align-self: center;
      }
    }
  }
`;

const ListItemTeleCard = ({ name, telegramLink, id }) => {
  return (
    <StyledListItemCard id={id}>
      <h2>{name}</h2>
      <a href={telegramLink} target="_blank" rel="noopener noreferrer">
        <div>
          <img src="/static/images/telegram-icon.png" alt="Link" />
        </div>
      </a>
    </StyledListItemCard>
  );
};

export default ListItemTeleCard;
