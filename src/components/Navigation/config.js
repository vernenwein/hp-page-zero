import React from "react";
import { Home, Analytics, Target } from "grommet-icons";

export default [
  { label: "Dashboard", pathname: "/", icon: <Home /> },
  { label: "My Visions", pathname: "/visions", icon: <Target /> },
  { label: "Statistics", pathname: "/analytics", icon: <Analytics /> },
];
