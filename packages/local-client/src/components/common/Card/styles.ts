import styled from "@emotion/styled/macro";
import { colors, fontSizes, font, rem, px, border, flex } from "styles/styles";

interface CardProps {
  variant: string;
  bgColor: string;
}

const cardVariants = {
  large: `
          height: ${rem(17)};
          width: ${rem(100)};
          `,
  small: `
      height: ${rem(17)};
      width: ${rem(20)};
      `,
};

export const CardDiv = styled.div<CardProps>`
  position: relative;
  background-color: ${(props) => colors[props.bgColor as keyof typeof colors]};
  ${border({ radius: px(10) })};
  ${(props) => cardVariants[props.variant as keyof typeof cardVariants]};
`;

export const CardContent = styled.div`
  position: absolute;
  right: 0;
  background-color: ${colors.white};
  height: 100%;
  width: 80%;
  ${border({ radius: `0 ${px(10)} ${px(10)} 0` })};
`;

interface CardContentTitleProps {
  titleColor: string | undefined;
}
export const CardContentTitle = styled.h1<CardContentTitleProps>`
  margin: ${px(10)};
  color: ${(props) => props.titleColor};
  ${font({ fontSize: px(fontSizes.title) })}
`;

export const CardContentText = styled.p`
  margin: ${px(10)} ${rem(1.5)};
  color: ${colors.text};
  ${font({ fontSize: px(fontSizes.medium) })}
`;

export const CardImageContainer = styled.div`
  ${flex({ justify: "center", align: "center" })}
  width: 100%;
  height: 100%;
  & svg {
    display: block;
    width: 80%;
  }
`;
