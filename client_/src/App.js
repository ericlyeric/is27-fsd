import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import PageNotFound from "./PageNotFound";
import SwimLaneProvider from "./context/SwimLaneContext";

function App() {
  return (
    <>
      <SwimLaneProvider>
        <Header />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </SwimLaneProvider>
    </>
  );
}

export default App;
