import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import Table from "./Pages/Table";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/table" component={Table} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
