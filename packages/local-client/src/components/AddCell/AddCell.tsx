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

      <Button
        onClick={() => insertCellAfter(previousCellId, "code")}
        variant="primary"
        text="Code"
        icon={icons.plus}
      />

      <Button
        onClick={() => insertCellAfter(previousCellId, "text")}
        variant="primary"
        text="Text"
        icon={icons.plus}
      />

      <Divider></Divider>
    </AddCellDiv>
  );
};

export default AddCell;
