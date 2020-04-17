import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { theme } from "../../theme/dark";
import NameLogo from "../../assets/images/name-logo.png";

const StyledMobileLayout = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const StyledHeader = styled.div`
  flex-grow: 0;
  width: 100%;
  height: 3.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${theme.darkBg2};
  box-shadow: 0 3px 5px 0 ${theme.darkSdw1};
  z-index: 999;
  div {
    &:first-child {
      flex-grow: 1;
      padding-left: 10px;
      height: 100%;
      img {
        height: 100%;
      }
    }
    &:last-child {
      text-align: center;
      flex-grow: 0;
      padding: 0 5px 0 10px;
      img {
        height: 3.5rem;
      }
    }
  }
`;

const MobileNavbarContainer = styled.div`
  width: 100%;
  height: 4.5rem;
  background: ${theme.darkBg2};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 12px;
  a {
    width: 33%;
    height: 100%;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: ${theme.darkColor1};
    text-decoration: none;
    padding: 0;
    cursor: pointer;

    &[data-active="true"] {
      background: ${theme.darkActiveBtn};
    }

    img {
      filter: brightness(1) invert(1);
      pointer-events: none;
    }
  }
`;

const MobileContentContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  overflow: auto;
  align-self: flex-end;
`;

const MobileLayout = ({ children }) => {
  const [activePage, setActivePage] = useState(window.location.pathname);

  const handleActivePage = pageName => {
    setActivePage(pageName);
  };

  return (
    <StyledMobileLayout>
      <StyledHeader>
        <div>
          <img src={NameLogo} alt="Anime Hub" title="Anime Hub" />
        </div>
        <div>
          <img src="/static/images/goku-ultra.png" alt="" />
        </div>
      </StyledHeader>
      <MobileContentContainer>{children}</MobileContentContainer>
      <MobileNavbarContainer>
        <Link
          onClick={() => handleActivePage("/anime-list")}
          data-active={activePage === "/anime-list"}
          to="/anime-list"
        >
          <div>
            <img
              src="/static/images/list.svg"
              height="35px"
              width="35px"
              alt="icon"
            />
          </div>
          <div>Telegram List</div>
        </Link>
        <Link
          onClick={() => handleActivePage("/home")}
          data-active={
            activePage === "/home" ||
            activePage === "/" ||
            activePage === "/home/about-us"
          }
          to="/home"
        >
          <div>
            <img
              src="/static/images/home.svg"
              height="35px"
              width="35px"
              alt="icon"
            />
          </div>
          <div>Home</div>
        </Link>
        <Link
          onClick={() => handleActivePage("/anime-library")}
          data-active={activePage === "/anime-library"}
          to="/anime-library"
        >
          <div>
            <img
              src="/static/images/anime-library.svg"
              height="35px"
              width="35px"
              alt="icon"
            />
          </div>
          <div>Anime Library</div>
        </Link>
      </MobileNavbarContainer>
    </StyledMobileLayout>
  );
};

export default MobileLayout;
