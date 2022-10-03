import { ButtonDiv, ButtonIcon } from "./styles";

interface ButtonProps {
  variant: string;
  text: string;
  withIcon?: boolean;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({ variant, text, withIcon, icon }) => {
  return (
    <ButtonDiv variant={variant}>
      {withIcon && (
        <ButtonIcon>
          <i className={icon} />
        </ButtonIcon>
      )}
      {text}
    </ButtonDiv>
  );
};

export default Button;
