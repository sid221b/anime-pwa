import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { theme } from "../../theme/dark";

const StyledHomeLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const StyledHomeNav = styled.div`
  position: sticky;
  top: 0;
  margin-left: -2%;
  flex-grow: 0;
  width: 100%;
  height: 4rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background: ${theme.darkBg1};

  a {
    width: 45%;
    height: 60%;
    line-height: 240%;
    background: ${theme.darkBg3};
    color: ${theme.darkColor1};
    text-decoration: none;
  }
`;
const StyledHomeContent = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

const HomeLayout = ({ children }) => {
  return (
    <StyledHomeLayout>
      <StyledHomeNav>
        <Link to="/home">Home</Link>
        <Link to="/home/about-us">About Us</Link>
      </StyledHomeNav>
      <StyledHomeContent>{children}</StyledHomeContent>
    </StyledHomeLayout>
  );
};

export default HomeLayout;
