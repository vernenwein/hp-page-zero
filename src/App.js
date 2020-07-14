import React from "react";
import { Grommet, Box } from "grommet";

import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import VisionList from "./pages/Vision/VisionList";

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Nunito",
      size: "18px",
      height: "20px",
      active: {
        size: "11px",
      },
    },
    active: {
      background: "transparent",
    },
    focus: { border: { color: "transparent" } },
  },
};

function App() {
  return (
    <Router>
      <Grommet theme={theme} full>
        <Box direction="row" fill>
          <Navigation />
          <Box flex="grow">
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route exact path="/visions">
                <VisionList />
              </Route>
              <Route exact path="/analytics">
                analytics
              </Route>
            </Switch>
          </Box>
        </Box>
      </Grommet>
    </Router>
  );
}

export default App;
