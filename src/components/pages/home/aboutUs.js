import React from "react";
import styled from "styled-components";

import HomeLayout from "../../../layout/home-layout/homeLayout";
import { theme } from "../../../theme/dark";

const StyledAboutUs = styled.div`
  padding: 1.2rem;
  font-size: 22px;
  font-style: italic;
  strong {
    color: ${theme.darkColor3};
    margin-top: 2rem;
    display: block;
  }
  @media only screen and (min-width: 700px) {
    align-self: center;
    justify-self: center;
    width: 50%;
  }
`;

const AboutUS = () => {
  return (
    <HomeLayout>
      <StyledAboutUs>
        There is nothing to about us just regular anime fans and anime
        enthusiast.
        <strong>"MAYBE LATER WE WILL HAVE SOMETHING TO SAY ABOUT US"</strong>
      </StyledAboutUs>
    </HomeLayout>
  );
};

export default AboutUS;
