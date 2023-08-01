import React from "react";
import Header from "./Header";
import Home from "../Home/Home"
import NotFound from "./NotFound";
import Study from "../Components/Study";
import { Route, Switch } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <div className="container ">
        <Switch>

            <Route exact path="/"> <Home /> </Route>

            <Route path="/decks/:deckId/study"> <Study /> </Route>

            <Route > <NotFound /> </Route>

        </Switch>
      </div>
    </>
  );
}

export default Layout;
