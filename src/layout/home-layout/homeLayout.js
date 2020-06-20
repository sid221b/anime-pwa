import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { theme } from "../../theme/dark";

const StyledHomeLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const StyledHomeNav = styled.div`
  max-width: 1000px;
  position: sticky;
  top: 0;
  /* margin-left: -2%; */
  flex-grow: 0;
  width: 100%;
  height: 4rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-self: center;
  text-align: center;
  background: ${theme.darkBg1};

  a {
    width: 45%;
    height: 60%;
    line-height: 240%;
    background: ${theme.darkBtn};
    color: ${theme.darkColor1};
    text-decoration: none;

    &[data-active="true"] {
      background: ${theme.darkActiveBtn};
    }
  }
`;
const StyledHomeContent = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

const HomeLayout = ({ children }) => {
  const [activeHomePage, setActiveHomePage] = useState(
    window.location.pathname
  );

  const handleActiveHomeView = (activePage) => {
    setActiveHomePage(activePage);
  };
  return (
    <StyledHomeLayout>
      <StyledHomeNav>
        <Link
          data-active={activeHomePage === "/home"}
          onClick={() => handleActiveHomeView("/home")}
          to="/home"
        >
          Home
        </Link>
        <Link
          data-active={activeHomePage === "/home/about-us"}
          onClick={() => handleActiveHomeView("/home/about-us")}
          to="/home/about-us"
        >
          About Us
        </Link>
      </StyledHomeNav>
      <StyledHomeContent>{children}</StyledHomeContent>
    </StyledHomeLayout>
  );
};

export default HomeLayout;
