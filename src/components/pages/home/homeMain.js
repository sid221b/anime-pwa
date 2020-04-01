import React from "react";
import styled from "styled-components";

import HomeLayout from "../../../layout/home-layout/homeLayout";
import { theme } from "../../../theme/dark";

const StyledHome = styled.div`
  display: block;
`;

const HomeMain = () => {
  return (
    <HomeLayout>
      <StyledHome>
        <h2>Somethis coming very soon...</h2>
      </StyledHome>
    </HomeLayout>
  );
};

export default HomeMain;
