import React from "react";
import { Heading, Box } from "grommet";

const Dashboard = (props) => {
  const day = new Date().getDate();
  const month = new Date().getMonth();

  return (
    <div>
      <Box align="end" pad={{ horizontal: "medium" }}>
        <Heading level="2">
          {day}
          <br />
          {month}
        </Heading>
      </Box>
      <Box align="center">this will be the list of todos</Box>
    </div>
  );
};

export default Dashboard;
