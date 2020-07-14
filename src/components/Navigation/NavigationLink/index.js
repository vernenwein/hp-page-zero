import React from "react";
import { Box, Button } from "grommet";

const NavigationLink = (props) => {
  const { currentPathname, pathname, icon, label, onClick } = props;
  return (
    <Box pad="small">
      <Button
        active={pathname === currentPathname}
        gap="medium"
        alignSelf="start"
        plain
        icon={icon}
        label={label}
        onClick={() => onClick(pathname)}
      />
    </Box>
  );
};

export default NavigationLink;
