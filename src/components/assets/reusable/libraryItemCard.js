import React from "react";
import styled from "styled-components";

import { theme } from "../../../theme/dark";

const StyledLibItemCard = styled.li`
  list-style: none;
  height: 8.5rem;
  max-width: 700px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow: hidden;
  background: ${theme.darkBg3};
  div {
    :first-child {
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
    :last-child {
      height: 100%;
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
`;

const LibraryItemCard = props => {
  return (
    <StyledLibItemCard id={props.mal_id}>
      <div>
        <img src={props.image_url} alt="" />
      </div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.synopsis}</p>
      </div>
    </StyledLibItemCard>
  );
};

export default LibraryItemCard;
