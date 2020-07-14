import React from "react";
import { Box, Nav, Button } from "grommet";
import { Contract, Expand } from "grommet-icons";
import { useLocation, useHistory } from "react-router-dom";

import NavigationConfig from "./config";
import NavigationLink from "./NavigationLink";

const Navigation = (props) => {
  const { isOpen, onToggleMenu } = props;

  const location = useLocation();
  const history = useHistory();

  const handleNavigate = (pathname) => {
    if (pathname === location.pathname) return;
    history.push(pathname);
  };

  return (
    <Box width={isOpen ? "480px" : "80px"} className="transition-1">
      <Nav gap="small" align="center">
        <Button
          onClick={onToggleMenu}
          icon={isOpen ? <Contract /> : <Expand />}
        ></Button>
        {NavigationConfig.map((item) => {
          const { label, pathname, icon } = item;
          return (
            <NavigationLink
              currentPathname={location.pathname}
              label={isOpen && label}
              pathname={pathname}
              onClick={handleNavigate}
              icon={icon}
              isOpen={isOpen}
            />
          );
        })}
      </Nav>
    </Box>
  );
};

export default Navigation;
