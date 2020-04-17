import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import ReactGA from "react-ga";

import Layout from "./layout/layout";
import DefaultRoute from "./routes/routes";

const App = () => {
  useEffect(() => {
    ReactGA.initialize("UA-163886148-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Layout>
      {window.location.pathname === "/" && <Redirect to="/home" />}
      <DefaultRoute />
    </Layout>
  );
};

export default App;
