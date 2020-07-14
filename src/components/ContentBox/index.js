import React from "react";
import { Box } from "grommet";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../../pages/Dashboard";
import VisionList from "../../pages/Vision/VisionList";

const ContentBox = (props) => {
  return (
    <Box background="#fff" round="small" padd="small" flex="grow">
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
  );
};

export default ContentBox;
