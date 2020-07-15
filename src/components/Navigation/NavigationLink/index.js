import React from "react";
import { Box, Button } from "grommet";
import {
  Home,
  Analytics,
  Target,
  Configure,
  CircleQuestion,
} from "grommet-icons";

const NavigationLink = (props) => {
  const { currentPathname, pathname, label, onClick, isOpen } = props;
  const isActive = pathname === currentPathname;

  let icon;
  const iconColor = isActive ? "#40E0D0" : "white";
  switch (pathname) {
    case "/":
      icon = <Home color={iconColor} />;
      break;
    case "/visions":
      icon = <Target color={iconColor} />;
      break;
    case "/analytics":
      icon = <Analytics color={iconColor} />;
      break;
    case "/settings":
      icon = <Configure color={iconColor} />;
      break;
    case "/help":
      icon = <CircleQuestion color={iconColor} />;
    default:
      break;
  }

  return (
    <Box
      pad={{
        vertical: "small",
        left: "small",
        right: isOpen ? "large" : "small",
      }}
    >
      <Button
        className="nowrap"
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
