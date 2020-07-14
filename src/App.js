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
      family: "Nunito",
      size: "18px",
      height: "20px",
      active: {
        size: "11px",
      },
    },
    active: { color: "turquoise", background: { color: "transparent" } },
    focus: { border: { color: "transparent" } },
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
