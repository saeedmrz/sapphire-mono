import styled from "@emotion/styled/macro";
import { colors, fontSizes, font, rem, px, border, flex } from "styles/styles";

interface CardProps {
  variant: string;
  bgColor: string;
}

const cardVariants = {
  large: `
          height: ${rem(17)};
          width: 70vw;
          `,
  small: `
      height: ${rem(17)};
      `,
};

export const CardDiv = styled.div<CardProps>`
  position: relative;
  ${border({
    style: "solid",
    radius: px(10),
    width: 1,
    color: colors.borderColor,
  })};
  ${(props) => cardVariants[props.variant as keyof typeof cardVariants]};
`;

export const CardContent = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  width: 90%;
  line-height: ${px(20)};
`;

interface CardContentTitleProps {
  titleColor: string | undefined;
}
export const CardContentTitle = styled.h1<CardContentTitleProps>`
  margin: ${px(10)};
  color: ${(props) => colors[props.titleColor as keyof typeof colors]};
  ${font({ fontSize: px(fontSizes.title), weight: "bold" })}
`;

export const CardContentText = styled.p`
  margin: ${px(10)};
  color: ${colors.text};
  ${font({ fontSize: px(fontSizes.medium) })}
`;

export const CardImageContainer = styled.div`
  ${flex({ justify: "center", align: "center" })}
  width: 100%;
  height: 100%;
  & img {
    display: block;
    max-width: 60%;
    min-width: ${px(160)};
  }
`;
