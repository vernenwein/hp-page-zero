import React from "react";
import { Heading, Box, Clock } from "grommet";
import ToDoList from "../../components/ToDoList";

const Dashboard = (props) => {
  const day = new Date().getDate();
  const month = new Date().getMonth();

  return (
    <Box fill="true" direction="row">
      <Box direction="column" pad="80px" basis="2/3">
        <Box direction="row" justify="between">
          <Box>
            <Heading level={2}>Dashboard</Heading>
            <Heading level={4}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </Heading>
          </Box>
        </Box>
        <ToDoList />
      </Box>

      <Box flex="grow" background="#414C66" pad="80px">
        <Box direction="row" justify="between">
          <Heading level={2} color="rgba(255,255,255,.8)">
            Today
          </Heading>
        </Box>
        <Heading level={4}>
          this will be a "day overview" with a{" "}
          <ul>
            <li>date and time (and clock)</li>
            <li>notes section (stays over all sessions)</li>
            <li>
              journal section (stays only for a day + content is stored in
              database)
            </li>

            <li>mood section</li>
            <li>calendar overview (sync with google/apple calendar)</li>
          </ul>
        </Heading>
        <Clock
          type="digital"
          style={{ position: "absolute", bottom: 80, right: 80 }}
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
