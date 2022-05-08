import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./Home";
import Conocenos from "./pages/Conocenos";
import Contacto from "./pages/Contacto";
import Cotiza from "./pages/Cotiza";
import Hacemos from "./pages/Hacemos";

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/cotiza" component={Cotiza} />
        <Route path="/hacemos" component={Hacemos} />
        <Route path="/conocenos" component={Conocenos} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default Routes;
