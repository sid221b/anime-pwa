import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import ReactGA from "react-ga";

import { theme } from "../../../theme/dark";

const StyledPopupModel = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(47, 47, 47, 0.8);
  z-index: 9999;
`;

const StyledContent = styled.div`
  position: fixed;
  height: 60%;
  width: 90%;
  max-width: 650px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.6rem;
  background: ${theme.darkBg2};
  overflow: auto;
  font-size: 17px;
  box-shadow: 0 0 1rem 0.1rem ${theme.darkSdw1};
  h1 {
    font-weight: 500;
    font-size: 24px;
    margin: 0.5rem 2.3rem 0.5rem 0;
  }
  .highlight {
    font-style: italic;
    display: flex;
    width: 100%;
    .displayImage {
      margin-left: 12px;
      img {
        height: 14rem;
      }
    }
  }
  article {
    margin: 0.5rem 0;
    /* text-align: justify; */
    color: ${theme.darkColor2};
  }
  .closeButton {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    border-radius: 10rem;
    padding: 5px 8px;
    box-shadow: 0 0 0.4rem 0.1rem ${theme.darkSdw1};
    background: ${theme.darkListBtn};
    color: ${theme.darkColor1};
  }
  .teleLinkBtn {
    margin: 1.5rem auto 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      height: 3rem;
      width: 17rem;
      padding: auto 0.7rem;
      border-radius: 4rem;
      box-shadow: 0 0 0.9rem 0.1rem ${theme.darkSdw1};
      background: ${theme.darkListBtn};
      text-decoration: none;
      color: ${theme.darkColor1};
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      font-variant: petite-caps;
      img {
        height: 65%;
        margin-left: 0.5rem;
        align-self: center;
      }
    }
  }
`;

const END_POINT = "https://api.jikan.moe/v3/anime/";

const PopupModel = ({ toggleOpenModal, mode }) => {
  const [data, setData] = useState();
  const [processing, setProcessing] = useState();

  const [mal_id] = useState(
    mode === "tele_list"
      ? localStorage.getItem("tele_list_anime_mal_id")
      : localStorage.getItem("library_anime_mal_id")
  );
  const [telegramLink] = useState(
    localStorage.getItem("tele_list_anime_tele_link")
  );
  useEffect(() => {
    setProcessing("PROCESSING");
    axios
      .get(`${END_POINT}${mal_id}`)
      .then(({ data }) => {
        setData(data);
        setProcessing("PROCESSED");
      })
      .catch((err) => {
        console.log(err);
        setProcessing("FAILED");
      });
  }, [mal_id]);

  const handleTeleLinkClick = () => {
    ReactGA.event({
      category: "Clicked Telegram Post",
      action: `visited telegram post`,
    });
  };

  return (
    <StyledPopupModel onClick={() => toggleOpenModal()}>
      <StyledContent onClick={(e) => e.stopPropagation()}>
        {processing === "PROCESSED" && (
          <>
            <h1>{data.title_english || data.title}</h1>

            <div>
              <div className="highlight">
                <div>
                  <div>
                    <strong>Rating: </strong>
                    {data.rating}
                  </div>
                  <div>
                    <strong>Score: </strong>
                    {data.score}
                  </div>
                  <div>
                    <strong>Scored By: </strong>
                    {data.scored_by}
                  </div>
                  <div>
                    <strong>Type: </strong>
                    {data.type}
                  </div>
                  <div>
                    <strong>Episodes: </strong>
                    {data.episodes}
                  </div>
                  <div>
                    <strong>Genres: </strong>
                    {data.genres.map((d, index) => (
                      <span key={index}>{d.name}, </span>
                    ))}
                  </div>
                  <div>
                    <strong>Aired: </strong>
                    {data.aired.string}
                  </div>
                </div>
                <div className="displayImage">
                  <img src={data.image_url} title={data.title} alt="" />
                </div>
              </div>
              <article>
                <strong>Description: </strong>
                {data.synopsis}
              </article>
              {mode === "tele_list" && (
                <div className="teleLinkBtn">
                  <a
                    href={telegramLink}
                    target="_blank"
                    onClick={handleTeleLinkClick}
                    rel="noopener noreferrer"
                  >
                    <span>Go To Telegram Post</span>
                    <img src="/static/images/telegram-icon.png" alt="Link" />
                  </a>
                </div>
              )}
            </div>
          </>
        )}
        {processing === "PROCESSING" && <div> Loading...</div>}
        {processing === "FAILED" && <div> Something went wrong!!...</div>}
        <button onClick={toggleOpenModal} className="closeButton">
          Close
        </button>
      </StyledContent>
    </StyledPopupModel>
  );
};

export default PopupModel;
