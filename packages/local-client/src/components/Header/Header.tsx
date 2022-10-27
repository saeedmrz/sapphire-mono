import { HeaderDiv, HeaderLeftCard, HeaderRightCard } from "./Header.style";
import Card from "components/common/Card/Card";
import { APP_NAME, APP_DESCRIPTION } from "constants/appConstants";

const Header: React.FC = () => {
  return (
    <HeaderDiv>
      <HeaderLeftCard>
        <Card
          variant="large"
          bgColor="primary"
          withContent={true}
          title={APP_NAME}
          text={APP_DESCRIPTION}
          titleColor="titleColor"
        />
      </HeaderLeftCard>
      <HeaderRightCard>
        <Card variant="small" bgColor="orange" withImage={true} />
      </HeaderRightCard>
    </HeaderDiv>
  );
};

export default Header;
