import React from "react";
import { Box, Nav, Button, Avatar } from "grommet";
import { Menu } from "grommet-icons";
import { useLocation, useHistory } from "react-router-dom";

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
      <Box pad={{ bottom: "40px", horizontal: "16px" }} fill="true">
        <Button
          onClick={onToggleMenu}
          icon={<Menu color="white" />}
          margin={{ bottom: "60px" }}
        ></Button>
        <Nav gap="medium" align="left" flex="grow">
          <Avatar
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
            background="white"
          />
          <NavigationLink
            currentPathname={location.pathname}
            label={isOpen && "Dashboard"}
            pathname={"/"}
            onClick={handleNavigate}
            isOpen={isOpen}
          />
          <NavigationLink
            currentPathname={location.pathname}
            label={isOpen && "Visions"}
            pathname={"/visions"}
            onClick={handleNavigate}
            isOpen={isOpen}
          />
          <NavigationLink
            currentPathname={location.pathname}
            label={isOpen && "Statistics"}
            pathname={"/analytics"}
            onClick={handleNavigate}
            isOpen={isOpen}
          />
        </Nav>

        <Nav gap="medium" align="left">
          <NavigationLink
            currentPathname={location.pathname}
            label={isOpen && "Settings"}
            pathname={"/settings"}
            onClick={handleNavigate}
            isOpen={isOpen}
          />
          <NavigationLink
            currentPathname={location.pathname}
            label={isOpen && "Help"}
            pathname={"/help"}
            onClick={handleNavigate}
            isOpen={isOpen}
          />
        </Nav>
      </Box>
    </Box>
  );
};

export default Navigation;
