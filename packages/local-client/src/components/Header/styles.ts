import styled from "@emotion/styled/macro";
import { headLeftCardAnim, headRightCardAnim } from "styles/animations";
import {
  colors,
  spacing,
  fontSizes,
  fonts,
  rem,
  px,
  border,
  flex,
} from "styles/styles";

export const HeaderDiv = styled.div`
  ${flex({ gap: 10 })};
  height: ${rem(17)};
  width: 100%;
`;

export const HeaderLeftCard = styled.div`
  animation: ${headLeftCardAnim} 0.7s ease-out;
`;

export const HeaderRightCard = styled.div`
  transform: translateY(-120%);
  animation: ${headRightCardAnim} 0.5s ease-in-out 0.8s forwards;
`;
