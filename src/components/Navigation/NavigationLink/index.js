import React from "react";
import { Box, Button } from "grommet";

const NavigationLink = (props) => {
  const { currentPathname, pathname, icon, label, onClick, isOpen } = props;
  const isActive = pathname === currentPathname;
  return (
    <Box
      pad={{
        vertical: "small",
        left: "small",
        right: isOpen ? "large" : "small",
      }}
    >
      <Button
        className={isActive ? "btn-active" : ""}
        active={isActive}
        gap="small"
        alignSelf="start"
        plain
        icon={icon}
        label={isOpen && label}
        onClick={() => onClick(pathname)}
      />
    </Box>
  );
};

export default NavigationLink;
