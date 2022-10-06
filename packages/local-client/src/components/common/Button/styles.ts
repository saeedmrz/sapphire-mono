import styled from "@emotion/styled/macro";
import { colors, fontSizes, font, rem, px, border, flex } from "styles/styles";

interface ButtonDivProps {
  variant: string;
}

const buttonVariants = {
  primary: `
    padding: ${rem(1)} ${rem(2.5)};
    background: ${colors.primary};
    ${border({ radius: rem(1) })};
    transition: all .2s;
    &: hover {
        background: ${colors.yellowDark};
        transform: scale(1.1);
    }
    `,

  small: `
    padding: ${rem(0.5)} ${rem(1)};
    ${border({ radius: rem(0.5) })};
    background: ${colors.primary};
    transition: all .2s;
    &: hover {
      background: ${colors.yellowDark};
    }
    `,

  iconic: `
    padding: ${rem(0.5)} ${rem(0.5)};
    ${border({ radius: rem(0.5) })};
    background: ${colors.yellow};
    transition: all .2s;
    &: hover {
      background: ${colors.yellowDark};
    }
    `,
};

export const ButtonDiv = styled.button<ButtonDivProps>`
  cursor: pointer;
  color: ${colors.white};
  ${flex({ align: "center", justify: "center", gap: 3 })};
  border: none;
  ${font({ fontSize: px(fontSizes.small) })};
  ${(props) => buttonVariants[props.variant as keyof typeof buttonVariants]};
`;

export const ButtonIcon = styled.i`
  ${flex({ align: "center", justify: "center" })}
  ${font({ fontSize: px(fontSizes.medium) })};
`;
