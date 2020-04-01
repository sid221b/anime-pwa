import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMobileLayout = styled.div``;

const MobileNavbarContainer = styled.div``;

const MobileContentContainer = styled.div``;

const MobileLayout = ({ children }) => {
  return (
    <StyledMobileLayout>
      <MobileNavbarContainer>
        <Link to="">Anime List</Link>
        <Link to="">Home</Link>
        <Link to="">Anime Library</Link>
      </MobileNavbarContainer>
      <MobileContentContainer>{children}</MobileContentContainer>
    </StyledMobileLayout>
  );
};

export default MobileLayout;
