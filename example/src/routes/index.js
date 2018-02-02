
import React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";

import Agenda from "../agenda/agenda.js";
import Agenda2 from "../agenda/agenda2.js";

export default () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Agenda} />
      <Route exact path="/page2" component={Agenda2} />
    </Switch>
  </HashRouter>
);
