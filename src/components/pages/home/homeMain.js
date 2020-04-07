import React from "react";
import styled from "styled-components";

import HomeLayout from "../../../layout/home-layout/homeLayout";
import { theme } from "../../../theme/dark";

const StyledHome = styled.div`
  height: 100%;
  display: block;
  padding: 1rem;
  h1 {
    margin-top: 10rem;
    text-align: center;
    font-size: 75px;
  }
  
`;

const HomeMain = () => {
  return (
    <HomeLayout>
      <StyledHome>
        <h2>Something's coming very soon...</h2>
        <h1>{window.innerWidth} </h1>
      </StyledHome>
    </HomeLayout>
  );
};

export default HomeMain;
