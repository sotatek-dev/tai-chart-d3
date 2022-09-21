import React from "react";

import Layout from "./Layout";
import routes from "../routes";
import { AppContext, useAppReducer } from "../hooks/useAppContext";
import "../index.scss";

const App = (): JSX.Element => {
  const [state, dispatch] = useAppReducer();

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Layout>{routes}</Layout>
    </AppContext.Provider>
  );
};

export default App;
