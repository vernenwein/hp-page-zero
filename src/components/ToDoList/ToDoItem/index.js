import React, { useState } from "react";
import { Box, CheckBox, Paragraph, Button } from "grommet";
import { MoreVertical } from "grommet-icons";

import { HoverBox } from "./styles";

const ToDoItem = (props) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const { title, onToggleComplete } = props;
  return (
    <HoverBox direction="row" width="100%">
      <CheckBox
        checked={isCompleted}
        onChange={(e) => {
          console.log(e.target.checked);
          setIsCompleted(e.target.checked);
        }}
      ></CheckBox>
      <Box flex="grow" direction="row" align="start">
        <Paragraph
          className={isCompleted ? "todoText completed" : "todoText"}
          margin={{ left: "20px" }}
        >
          {title}
        </Paragraph>
      </Box>
      <Button icon={<MoreVertical color="#fea788" />} onClick={() => {}} />
    </HoverBox>
  );
};

export default ToDoItem;
