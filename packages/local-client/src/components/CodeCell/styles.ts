import styled from "@emotion/styled/macro";
import { fadeIn } from "styles/animations";
import { colors, fontSizes, font, rem, px, border, flex } from "styles/styles";

export const ResiableWrapper = styled.div`
  height: calc(100% - 10px);
  ${flex({ direction: "row" })}
`;

export const Result = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  flex-grow: 1;
  background-color: ${colors.white};
`;

export const ProgressDiv = styled.div`
  animation: ${fadeIn} 0.5s;
`;
