import styled from "styled-components";
import { Box } from "grommet";

export const HoverBox = styled(Box)`
  button {
    opacity: 0;
    transition-duration: 0.2s;
  }

  &:hover button {
    opacity: 1;
  }
`;
