import React from "react";
import { Sidebar, Nav } from "grommet";
import { useLocation, useHistory } from "react-router-dom";

import NavigationConfig from "./config";
import NavigationLink from "./NavigationLink";

const Navigation = (props) => {
  const location = useLocation();
  const history = useHistory();

  const handleNavigate = (pathname) => {
    if (pathname === location.pathname) return;
    history.push(pathname);
  };

  return (
    <Sidebar
      background="brand"
      header={<div>Valerie's Dashboard</div>}
      footer={<div>Here are footer infos</div>}
    >
      <Nav gap="small">
        {NavigationConfig.map((item) => {
          const { label, pathname, icon } = item;
          return (
            <NavigationLink
              currentPathname={location.pathname}
              label={label}
              pathname={pathname}
              onClick={handleNavigate}
              icon={icon}
            />
          );
        })}
      </Nav>
    </Sidebar>
  );
};

export default Navigation;
