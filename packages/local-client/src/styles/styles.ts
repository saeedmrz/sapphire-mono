import styled from "@emotion/styled";
import { css } from "@emotion/react";

//---------- Variables ----------//

export const spacing = {
  normal: 16,
  medium: 24,
  large: 32,
  extraLarge: 60,
};

export const colors = {
  primary: "#ff7f2a",
  primaryDark: "#e67b32",
  title: "#545454",
  white: "#ffffff",
  black: "#000000",
  red: "#e15554",
  grey: "#cecece",
  greyDark: "#666",
  greyLight: "#eee",
  greyHolder: "#707070",
  blizzardBlue: "#9fe7f5",
};

export const fontSizes = {
  small: 11,
  medium: 13,
  large: 16,
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
    padding: 2rem;
    margin: 0px;
    font-family: ${fonts.normal};
  }
`;

//---------- Functions (helps to style css in styles files easily) ----------//

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
  border-style:${style};
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
}: {
  direction?: string;
  align?: string;
  justify?: string;
  grow?: string;
  wrap?: string;
  shrink?: string;
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
