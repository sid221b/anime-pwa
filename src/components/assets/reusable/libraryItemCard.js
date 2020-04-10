import React from "react";
import styled from "styled-components";

import { theme } from "../../../theme/dark";

const StyledLibItemCard = styled.li`
  position: relative;
  list-style: none;
  height: 10rem;
  max-width: 700px;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${theme.darkBg2};
  overflow: hidden;
  .contentContainer {
    display: flex;
    flex-direction: row;
    padding: 0.5rem 0.5rem 0 0.5rem;
    .contentImgContainer {
      flex-grow: 0;
      width: 97px;
      margin-right: 0.7rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        flex-grow: 0;
        height: 100%;
        width: -webkit-fill-available;
      }
    }
    .contentDescContainer {
      flex-grow: 10;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      overflow: hidden;
      text-overflow: ellipsis;
      h2 {
        font-size: 18px;
        font-weight: 500;
        margin: 0 0 0.5rem 0;
        padding: 0;
      }
      p {
        color: ${theme.darkColor2};
        font-size: 14.5px;
        margin: 0;
        padding: 0;
      }
    }
  }
  .statsContainer {
    position: absolute;
    bottom: 0;
    width: -webkit-fill-available;
    height: 1.5rem;
    padding: 0 0.5rem;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    background: ${theme.darkBg3};
    color: ${theme.darkColor2};
    font-size: 15px;
  }
`;

const LibraryItemCard = props => {
  return (
    <StyledLibItemCard id={props.mal_id}>
      <div className="contentContainer">
        <div className="contentImgContainer">
          <img src={props.image_url} alt="" />
        </div>
        <div className="contentDescContainer">
          <h2>{props.title}</h2>
          <p>{props.synopsis}</p>
        </div>
      </div>
      <div className="statsContainer">
        <span>{`Score: ${props.score}`}</span>
        <span>{`Members: ${props.members}`}</span>
        <span>{`Rated: ${props.rated}`}</span>
      </div>
    </StyledLibItemCard>
  );
};

export default LibraryItemCard;
