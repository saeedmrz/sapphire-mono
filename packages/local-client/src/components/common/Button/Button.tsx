import { ButtonDiv, ButtonIcon } from "./styles";

interface ButtonProps {
  variant: string;
  text?: string;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({ variant, text, icon }) => {
  return (
    <ButtonDiv variant={variant}>
      {icon && (
        <ButtonIcon>
          <i className={icon} />
        </ButtonIcon>
      )}
      {text}
    </ButtonDiv>
  );
};

export default Button;
