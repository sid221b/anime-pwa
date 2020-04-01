import React from "react";
import { Redirect } from "react-router-dom";

import Layout from "./layout/layout";
import DefaultRoute from "./routes/routes";

const App = () => {
  return (
    <Layout>
      {window.location.pathname === "/" && <Redirect to="/home" />}
      <DefaultRoute />
    </Layout>
  );
};

export default App;
