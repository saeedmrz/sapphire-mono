import { useActions } from "hooks/use-actions";
import { AddCellDiv, Divider } from "./styles";
import Button from "components/common/Button/Button";
import { icons } from "styles/icons";

interface AddCellProps {
  previousCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ forceVisible, previousCellId }) => {
  const { insertCellAfter } = useActions();

  return (
    <AddCellDiv forceVisible={forceVisible}>
      <Divider></Divider>
      <div onClick={() => insertCellAfter(previousCellId, "code")}>
        <Button variant="primary" text="Code" icon={icons.plus} />
      </div>
      <div onClick={() => insertCellAfter(previousCellId, "text")}>
        <Button variant="primary" text="Text" icon={icons.plus} />
      </div>
      <Divider></Divider>
    </AddCellDiv>
  );
};

export default AddCell;
