import React from "react";
import { Box, Heading } from "grommet";

import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  return (
    <Box width="680px">
      <Box margin={{ bottom: "40px" }}>
        <Heading margin={{ vertical: "10px" }} level={3}>
          Due Today
        </Heading>
        <ToDoItem isCompleted={false} title="Leg Day" />
        <ToDoItem isCompleted={false} title="Drink 5 glasses of water" />
      </Box>
      <Box>
        <Heading margin={{ vertical: "10px" }} level={3}>
          Due this week
        </Heading>
        <ToDoItem isCompleted={false} title="Set up budget plan" />
      </Box>
    </Box>
  );
};

export default ToDoList;
