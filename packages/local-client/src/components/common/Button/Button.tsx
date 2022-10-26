import { ButtonDiv, ButtonIcon } from "./Button.style";

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant: string;
  text?: string;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({ variant, text, icon, onClick }) => {
  return (
    <ButtonDiv onClick={onClick} variant={variant}>
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
