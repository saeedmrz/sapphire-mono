import styled from "@emotion/styled/macro";
import { colors, fontSizes, font, rem, px, border, flex } from "styles/styles";

export const ActionBarDiv = styled.div`
  position: absolute;
  top: ${px(5)};
  right: ${px(5)};
  opacity: 0.25;
  transition: opacity 0.3s;
  ${flex({ gap: 3 })}

  &:hover {
    opacity: 1;
  }
`;
