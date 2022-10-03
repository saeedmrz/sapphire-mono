import { HeaderDiv, HeaderLeftCard, HeaderRightCard } from "./styles";
import Card from "components/common/Card/Card";

const title = "Train";
const contenctText =
  "This application helps you to write code and write documentation for that code. The application compiler is so fast. You can add text boxes and code boxes as many as you like.";

const Header: React.FC = () => {
  return (
    <HeaderDiv>
      <HeaderLeftCard>
        <Card
          variant="large"
          bgColor="primary"
          withContent={true}
          title={title}
          text={contenctText}
          titleColor="orange"
        />
      </HeaderLeftCard>
      <HeaderRightCard>
        <Card variant="small" bgColor="orange" withImage={true} />
      </HeaderRightCard>
    </HeaderDiv>
  );
};

export default Header;
