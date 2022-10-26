import styled from "@emotion/styled/macro";
import { cellItemAnim } from "styles/animations";
import { px } from "styles/styles";

export const CellItem = styled.div`
  margin: ${px(20)} 0;
  transform-origin: top;
  transform: scaleY(0);
  animation: ${cellItemAnim} 0.8s forwards;
`;

export const ActionBarWrapper = styled.div`
  height: 30px;
  width: 100%;
  background-color: #37414b;
`;
