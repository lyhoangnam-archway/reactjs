import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute  } from "react-router";
import { createHashHistory  } from "history";

import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

var history = createHashHistory({queryKey: false})

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="archives(/:article)" name="archives" component={Archives}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
    </Route>
  </Router>, app);
