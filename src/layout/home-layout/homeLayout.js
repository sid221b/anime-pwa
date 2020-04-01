import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHomeLayout = styled.div``;
const StyledHomeNav = styled.div``;
const StyledHomeContent = styled.div``;

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
