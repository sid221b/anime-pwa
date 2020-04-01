import React from "react";

import getWindowSize from "../../assets/getWindowSize";

const AnimeLibrary = () => {
  console.log(getWindowSize().isMobile);

  return (
    <div>
      <div>Anime Library Page</div>
      <div>{getWindowSize().dimensions.width}</div>
    </div>
  );
};

export default AnimeLibrary;
