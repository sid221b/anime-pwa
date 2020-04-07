import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { theme } from "../../theme/dark";
import NameLogo from "../../assets/images/name-logo.png";

const StyledDesktopLayout = styled.div``;

const DesktopHeaderContainer = styled.div`
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${theme.darkBg2};
  div {
    height: 100%;
    img {
      height: 100%;
    }
  }
`;

const DesktopNavbarContainer = styled.div`
  margin-right: 2rem;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 18px;
  a {
    width: 11rem;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    color: ${theme.darkColor1};
    text-decoration: none;
    cursor: pointer;
    div {
      align-self: center;
      height: 100%;
      line-height: 320%;
      padding-left: 0.7rem;
    }

    &[data-active="true"] {
      background: ${theme.darkActiveBtn};
    }
    img {
      filter: brightness(1) invert(1);
      pointer-events: none;
    }
  }
`;

const DesktopContentContainer = styled.div``;

const DesktopLayout = ({ children }) => {
  const [activePage, setActivePage] = useState(window.location.pathname);

  const handleActivePage = pageName => {
    setActivePage(pageName);
  };

  return (
    <StyledDesktopLayout>
      <DesktopHeaderContainer>
        <div>
          <img src={NameLogo} alt="Anime Hub" title="Anime Hub" />
        </div>
        <DesktopNavbarContainer>
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
            <div>Anime List</div>
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
        </DesktopNavbarContainer>
      </DesktopHeaderContainer>
      <DesktopContentContainer>{children}</DesktopContentContainer>
    </StyledDesktopLayout>
  );
};

export default DesktopLayout;
