import React from "react";
import styled from "styled-components";
import ReactGA from "react-ga";

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
  white-space: nowrap;
  h2 {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-size: 15.5px;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
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
  @media only screen and (min-width: 700px) {
    width: 600px;
    max-width: 700px;
  }
`;

const ListItemTeleCard = ({ name, telegramLink, mal_id, openModal }) => {
  const handleLinkClick = () => {
    ReactGA.event({
      category: "Clicked Telegram Post",
      action: `visited telegram post`,
    });
  };
  return (
    <StyledListItemCard id={mal_id}>
      <h2 onClick={() => openModal(mal_id, name, telegramLink)}>{name}</h2>
      <a
        href={telegramLink}
        onClick={handleLinkClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <img src="/static/images/telegram-icon.png" alt="Link" />
        </div>
      </a>
    </StyledListItemCard>
  );
};

export default ListItemTeleCard;
