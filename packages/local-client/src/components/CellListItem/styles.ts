import styled from "@emotion/styled/macro";
import { cellItemAnim } from "styles/animations";
import { colors, fontSizes, font, rem, px, border, flex } from "styles/styles";

export const CellItem = styled.div`
  transform-origin: top;
  transform: scaleY(0);
  animation: ${cellItemAnim} 0.8s forwards;
`;
