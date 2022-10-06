import styled from "@emotion/styled/macro";
import { colors, fontSizes, font, rem, px, border, flex } from "styles/styles";

export const ActionBarDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.25;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;
