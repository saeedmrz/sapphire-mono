import { useAppDispatch } from "store/hooks";
import { insertCellAfter } from "store/cellsSlice";
import { AddCellDiv, Divider } from "./AddCell.style";
import Button from "components/common/Button/Button";
import { icons } from "styles/icons";

interface AddCellProps {
  previousCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ forceVisible, previousCellId }) => {
  const dispatch = useAppDispatch();

  return (
    <AddCellDiv forceVisible={forceVisible}>
      <Divider></Divider>

      <Button
        onClick={() =>
          dispatch(
            insertCellAfter({
              id: previousCellId,
              type: "code",
            })
          )
        }
        variant="primary"
        text="Code"
        icon={icons.plus}
      />

      <Button
        onClick={() =>
          dispatch(
            insertCellAfter({
              id: previousCellId,
              type: "text",
            })
          )
        }
        variant="primary"
        text="Text"
        icon={icons.plus}
      />

      <Divider></Divider>
    </AddCellDiv>
  );
};

export default AddCell;
