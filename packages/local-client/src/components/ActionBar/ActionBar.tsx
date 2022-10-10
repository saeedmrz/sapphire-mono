import { useActions } from "hooks/use-actions";
import { ActionBarDiv } from "./styles";
import Button from "components/common/Button/Button";
import { icons } from "styles/icons";

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  return (
    <ActionBarDiv>
      <Button
        onClick={() => moveCell(id, "up")}
        variant="iconic"
        icon={icons.arrowUp}
      ></Button>

      <Button
        onClick={() => moveCell(id, "down")}
        variant="iconic"
        icon={icons.arrowDown}
      ></Button>

      <Button
        onClick={() => deleteCell(id)}
        variant="iconic"
        icon={icons.times}
      ></Button>
    </ActionBarDiv>
  );
};

export default ActionBar;
