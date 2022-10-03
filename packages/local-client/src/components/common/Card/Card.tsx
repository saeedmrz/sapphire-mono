import {
  CardContent,
  CardContentText,
  CardContentTitle,
  CardDiv,
  CardImageContainer,
} from "./styles";

import { ReactComponent as LogoImage } from "assets/images/logo.svg";

interface CardProps {
  variant: string;
  bgColor: string;
  withContent?: boolean;
  title?: string;
  text?: string;
  titleColor?: string;
  withImage?: boolean;
}

const Card: React.FC<CardProps> = ({
  variant,
  bgColor,
  withContent,
  title,
  text,
  titleColor,
  withImage,
}) => {
  return (
    <CardDiv variant={variant} bgColor={bgColor}>
      {withImage && (
        <CardImageContainer>
          <LogoImage />
        </CardImageContainer>
      )}
      {withContent && (
        <CardContent>
          <CardContentTitle titleColor={titleColor}>{title}</CardContentTitle>
          <CardContentText>{text}</CardContentText>
        </CardContent>
      )}
    </CardDiv>
  );
};

export default Card;
