import styled from "@emotion/styled/macro";
import { rotate } from "styles/animations";
import { colors, px, border, size } from "styles/styles";

export const SpinnerDiv = styled.div`
  display: inline-block;
  ${size({ width: px(80), height: px(80) })}

  ::after {
    content: "";
    display: block;
    margin: 8px;
    animation: ${rotate} 1.2s linear infinite;
    ${border({
      style: "solid",
      width: 6,
      color: `${colors.primary} transparent ${colors.primary} transparent`,
      radius: "50%",
    })}
    ${size({ width: px(64), height: px(64) })}
  }
`;
