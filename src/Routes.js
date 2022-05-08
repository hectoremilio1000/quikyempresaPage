import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./Home";
import Cotiza from "./pages/Cotiza";

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/cotiza" component={Cotiza} />

        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default Routes;
