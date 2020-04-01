import React from "react";
import { Switch, Route } from "react-router-dom";

import HomeMain from "../components/pages/home/homeMain";
import AboutUs from "../components/pages/home/aboutUs";
import AnimeList from "../components/pages/animeList";
import AnimeLibrary from "../components/pages/animeLibrary";
import Page404 from "../components/pages/page404";

const Home = () => {
  return (
    <Switch>
      <Route path="/home" exact component={HomeMain} />
      <Route path="/home/about-us" exact component={AboutUs} />
    </Switch>
  );
};

const DefaultRoute = () => {
  return (
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/anime-list" exact component={AnimeList} />
      <Route path="/anime-library" exact component={AnimeLibrary} />
      <Route to="*" component={Page404} />
    </Switch>
  );
};

export default DefaultRoute;
