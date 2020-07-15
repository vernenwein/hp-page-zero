import React, { useState } from "react";
import { Grommet, Box } from "grommet";

import Navigation from "./components/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import ContentBox from "./components/ContentBox";

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
      "primary-dark": "#242A38",
    },
    font: {
      family: "Ubuntu",
      size: "18px",
      height: "20px",
      active: {
        size: "11px",
      },
    },
    active: { color: "turquoise", background: { color: "transparent" } },
    focus: { border: { color: "transparent" } },
  },
  heading: {
    level: {
      "1": {
        font: { family: "Playfair" },
        medium: {
          size: "70px",
        },
      },
      "3": {
        font: {},
        medium: {
          size: "18px",
          maxWidth: "100%",
        },
      },
      "4": {
        font: {
          weight: 400,
        },
      },
    },
    weight: 500,
  },
  checkBox: {
    border: { color: "rgba(36, 42, 56, 0.1)" },
    color: "#40E0D0",
    hover: { border: { color: "#40E0D0" } },
  },
};

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Router>
      <Grommet theme={theme} full>
        <Box
          direction="row"
          fill
          background="primary-dark"
          pad={{ vertical: "small", right: "small" }}
        >
          <Navigation
            isOpen={menuIsOpen}
            onToggleMenu={() => setMenuIsOpen(!menuIsOpen)}
          />
          <ContentBox onToggleMenu={() => setMenuIsOpen(!menuIsOpen)} />
        </Box>
      </Grommet>
    </Router>
  );
}

export default App;
