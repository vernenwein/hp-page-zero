import React from "react";
import { Box, Avatar, Heading, Paragraph, Button } from "grommet";
import { MoreVertical } from "grommet-icons";

const Card = (props) => {
  const { background, title, description, activeDays, icon } = props;
  return (
    <Box
      align="center"
      direction="row"
      pad="medium"
      margin={{ bottom: "medium" }}
      round="medium"
      elevation="small"
      background={background}
    >
      <Avatar size="large" background="white">
        {icon}
      </Avatar>
      <Box flex="grow" pad={{ horizontal: "medium" }}>
        <Heading level="3" pad={{ bottom: "medium" }} margin="none">
          {title}
        </Heading>
        <Paragraph>{description}</Paragraph>
      </Box>
      <Button>
        <MoreVertical color="white" size="large" />
      </Button>
    </Box>
  );
};

export default Card;
