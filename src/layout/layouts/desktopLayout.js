import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDesktopLayout = styled.div``;

const DesktopNavbarContainer = styled.div``;

const DesktopContentContainer = styled.div``;

const DesktopLayout = ({ children }) => {
  return (
    <StyledDesktopLayout>
      <DesktopNavbarContainer>
        <Link to="/anime-list">Anime List</Link>
        <Link to="/home">Home</Link>
        <Link to="/anime-library">Anime Library</Link>
      </DesktopNavbarContainer>
      <DesktopContentContainer>{children}</DesktopContentContainer>
    </StyledDesktopLayout>
  );
};

export default DesktopLayout;
