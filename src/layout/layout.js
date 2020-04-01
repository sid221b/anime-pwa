import React from "react";
import styled from "styled-components";

// import getScreenSize

import DesktopLayout from "./layouts/desktopLayout";
import MobileLayout from "./layouts/mobileLayout";
import {theme} from "../theme/dark";

const StyledLayout = styled.div`
  height: 100vh;
  width: 100%;
  background: ${theme.darkBg1};
  color: ${theme.darkColor1};
`;

const Layout = ({ children }) => {
  // console.log(dark)
  return (
    <StyledLayout>
      {window.innerWidth > 500 ? (
        <DesktopLayout>{children}</DesktopLayout>
      ) : (
        <MobileLayout theme={theme}>{children}</MobileLayout>
      )}
    </StyledLayout>
  );
};

export default Layout;
