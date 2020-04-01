import React from "react";
import styled from "styled-components";

import DesktopLayout from "./layouts/desktopLayout";
import MobileLayout from "./layouts/mobileLayout";

const StyledLayout = styled.div``;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      {window.innerWidth > 500 ? (
        <DesktopLayout>{children}</DesktopLayout>
      ) : (
        <MobileLayout>{children}</MobileLayout>
      )}
    </StyledLayout>
  );
};

export default Layout;
