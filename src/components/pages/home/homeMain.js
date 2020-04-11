import React from "react";
import styled from "styled-components";

import HomeLayout from "../../../layout/home-layout/homeLayout";
import { theme } from "../../../theme/dark";

const StyledHome = styled.div`
  height: 100%;
  display: block;
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-flow: column;
  .otakuContainer {
    h2 {
      margin: 0;
      padding: 0;
      font-size: 16px;
    }
    p {
      font-size: 15px;
      margin-top: 0.2rem;
      text-indent: 3.5rem;
      color: ${theme.darkColor2};
    }
  }
  .homeDesc {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 1.3rem;
    h2 {
      align-self: flex-start;
      text-align: left;
      margin: 0;
      padding: 0;
      font-size: 20px;
    }
    h3 {
      font-weight: normal;
      font-size: 16px;
    }
    a {
      margin-top: 0.75rem;
      height: 3.7rem;
      width: 13rem;
      border-radius: 10rem;
      box-shadow: 0 0 0.9rem 0.1rem ${theme.darkSdw1};
      background: ${theme.darkListBtn};
      text-decoration: none;

      div {
        margin: 0 0.7rem;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          height: 80%;
          align-self: center;
        }
      }
      .homeBtnTxt {
        font-size: 24px;
        font-variant: petite-caps;
        color: ${theme.darkColor1};
      }
    }
  }
`;

const HomeMain = () => {
  return (
    <HomeLayout>
      <StyledHome>
        <div className="otakuContainer">
          <h2>Otaku</h2>
          <p>
            Otaku is a Japanese term for people with consuming interests,
            particularly in anime and manga. Its contemporary use originated
            with Akio Nakamori's 1983 essay in Manga Burikko.{" "}
            <span role="img" aria-label=";)">
              😅
            </span>
          </p>
        </div>
        <div className="homeDesc">
          <h2>Telegram Channel</h2>
          <h3>
            Join the required Telegram channel by clicking on following button
            if you haven't already else list won't work properly.
          </h3>
          <a
            href="https://t.me/englishdubbedanimee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="/static/images/telegram-icon.png" alt="Join Channel" />
            </div>
          </a>
        </div>
        <div className="homeDesc">
          <h2>Help</h2>
          <h3>
            If you have any kind of complain or facing any problem contact
            someone in following group...
            <span role="img" aria-label=";)">
              ⚠️
            </span>
          </h3>
          <a
            href="https://t.me/animegroup_eng"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="homeBtnTxt">Join Group</div>
          </a>
        </div>
        <div className="homeDesc">
          <h2>Support Us</h2>
          <h3>
            If you are liking the channel and efforts put into making this web
            app please support creators by donating on following link... It will
            be very helpful.....
            <span role="img" aria-label=";)">
              🥰🥰🥰🥰
            </span>
          </h3>
          <a
            href="https://telegra.ph/Donate-to-Support-US-12-22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="homeBtnTxt">Donate Us</div>
          </a>
        </div>
      </StyledHome>
    </HomeLayout>
  );
};

export default HomeMain;
