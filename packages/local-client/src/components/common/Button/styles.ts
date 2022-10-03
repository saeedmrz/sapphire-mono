import styled from "@emotion/styled/macro";
import { colors, fontSizes, font, rem, px, border, flex } from "styles/styles";

interface ButtonDivProps {
  variant: string;
}

const buttonVariants = {
  primary: `
    padding: ${rem(1)} ${rem(2.5)};
    background: ${colors.primary};
    transition: all .2s;
    &: hover {
        background: ${colors.yellowDark};
        transform: scale(1.1);
    }
    `,
};

export const ButtonDiv = styled.button<ButtonDivProps>`
  cursor: pointer;
  color: ${colors.white};
  ${flex({ align: "center", justify: "center", gap: 3 })};
  ${border({ radius: rem(1), width: px(0) })};
  ${font({ fontSize: px(fontSizes.small) })};
  ${(props) => buttonVariants[props.variant as keyof typeof buttonVariants]};
`;

export const ButtonIcon = styled.i`
  ${flex({ align: "center", justify: "center" })}
  ${font({ fontSize: px(fontSizes.medium) })};
`;
