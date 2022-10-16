import { useAppDispatch } from "store/hooks";
import { moveCell, deleteCell } from "store/cellsSlice";
import { ActionBarDiv } from "./ActionBar.styles";
import Button from "components/common/Button/Button";
import { icons } from "styles/icons";

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  return (
    <ActionBarDiv>
      <Button
        onClick={() => dispatch(moveCell({ id, direction: "up" }))}
        variant="iconic"
        icon={icons.arrowUp}
      ></Button>

      <Button
        onClick={() => dispatch(moveCell({ id, direction: "down" }))}
        variant="iconic"
        icon={icons.arrowDown}
      ></Button>

      <Button
        onClick={() => dispatch(deleteCell(id))}
        variant="iconic"
        icon={icons.times}
      ></Button>
    </ActionBarDiv>
  );
};

export default ActionBar;
