import styled from "@emotion/styled/macro";
import { css } from "@emotion/react";

//---------- Variables ----------//

export const spacing = {
  normal: 16,
  medium: 24,
  large: 32,
  extraLarge: 60,
};

export const colors = {
  primary: "hsl(179, 46%, 64%)",
  primaryDark: "hsl(179, 46%, 54%)",
  orange: "hsl(14, 97%, 71%)",
  yellow: "hsl(34, 96%, 70%)",
  yellowDark: "hsl(34, 96%, 65%)",
  purple: "hsl(268, 38%, 69%)",
  backColor: "hsl(0, 0%, 93%)",
  text: "#545454",
  white: "#ffffff",
  black: "#000000",
};

export const fontSizes = {
  small: 11,
  medium: 14,
  large: 18,
  title: 24,
};

export const fonts = {
  normal: "'Roboto', sans-serif",
  special: "'Rubik Mono One', sans-serif",
  title: "'Calibri', sans-serif",
};

//---------- body Style ----------//

export const bodyStyle = css`
  // This defines what 1 rem = 10px; 10px/16px = 62.5%
  * {
    font-size: 62.5%;
  }
  body {
    padding: 0.5rem;
    margin: 0px;
    font-family: ${fonts.normal};
    background-color: ${colors.backColor};
  }
`;

//---------- Main div ----------//
export const Main = styled.div`
  padding: 1rem;
  margin: 2rem;
  border-radius: 1rem;
  height: max-content;
  min-height: 88vh;
  background-color: ${colors.purple};
  z-index: -10;
`;

//---------- Functions (helps to style css in styles files easily) ----------//

export const rem = (value: number) => `${value}rem`;
export const px = (value: number) => `${value}px`;

export const boxShadow = ({
  hOffset,
  vOffset,
  blur,
  color,
}: {
  hOffset?: string;
  vOffset?: string;
  blur?: string | undefined | null;
  color:
    | { r: number; g: number; b: number; opacity: number }
    | null
    | undefined;
}) => `
  box-shadow: ${hOffset}
   ${vOffset}
   ${blur ? blur : ""}
   ${
     color ? `rgba(${color.r},${color.g},${color.b},${color.opacity})` : ""
   };                            
                              `;

export const border = ({
  width,
  color,
  style,
  radius,
}: {
  width?: string;
  color?: string;
  style?: string;
  radius?: string;
}) => `
  ${style ? `border-style:${style};` : ""}
  ${width ? `border-width:${width};` : ""}
  ${color ? `border-color:${color};` : ""}
  ${radius ? `border-radius:${radius};` : ""}
`;

export const background = ({
  color,
  repeat,
  position,
  image,
  size,
}: {
  color?: string;
  repeat?: string;
  position?: string;
  image?: string;
  size?: string;
}) => `
  ${color ? `background-color:${color};` : ""}
  ${repeat ? `background-repeat:${repeat};` : ""}
  ${position ? `background-position:${position};` : ""}
  ${image ? `background-image:${image};` : ""}
  ${size ? `background-size:${size};` : ""}
`;

export const size = ({
  width,
  height,
}: {
  width?: string;
  height?: string;
}) => `
  ${width ? `width:${width};` : ""}
  ${height ? `height:${height};` : ""}
`;

export const font = ({
  fontSize,
  family,
  weight,
}: {
  fontSize: string;
  family?: string;
  weight?: string;
}) => `
   font-size:${fontSize};
   ${weight ? `font-weight:${weight};` : ""}
   ${family ? `font-family:${family};` : ""}
`;

export const flex = ({
  direction,
  align,
  justify,
  grow,
  wrap,
  shrink,
  gap,
}: {
  direction?: string;
  align?: string;
  justify?: string;
  grow?: string;
  wrap?: string;
  shrink?: string;
  gap?: number;
}) => css`
  display: flex !important;
  ${direction &&
  (direction === "row"
    ? "flex-direction: row !important;"
    : "flex-direction: column !important;")}
  ${align && `align-items: ${align} !important;`}
  ${justify && `justify-content: ${justify} !important;`}
  ${grow && `flex-grow: ${grow} !important;`}
  ${wrap && `flex-wrap: ${wrap} !important;`}
  ${shrink && `flex-shrink: ${shrink} !important;`}
  ${gap && `gap: ${px(gap)} !important;`}
`;

export const text = ({
  size,
  weight,
  color,
  family,
  alignment,
  spacing,
}: {
  size?: string;
  weight?: string;
  color?: string;
  family?: string;
  alignment?: string;
  spacing?: string;
}) => `
  color: ${color || "#444"};
  ${size && `font-size: ${size}`};
  ${weight && `font-weight: ${weight}`};
  ${family && `font-family: ${fonts[family as keyof typeof fonts]}`};
  ${alignment && `text-align: ${alignment}`};
  ${spacing ? `letter-spacing:${spacing}` : ""};
`;
