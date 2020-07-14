import React from "react";

import Card from "../../../components/Card";
import { Box } from "grommet";
import { Run, Restaurant } from "grommet-icons";

const VisionList = (props) => {
  return (
    <Box pad="large">
      <Card
        icon={<Run />}
        background="#cce2cb"
        title="Be an Iron Man"
        description="Build the physical fitness to run an iron man and marathons yearly."
      />
      <Card
        icon={<Restaurant />}
        background="#ffdbcc"
        title="Become a Chef"
        description="Know how to cook all the healthy meals and create only delicious stuff"
      />
    </Box>
  );
};

export default VisionList;
