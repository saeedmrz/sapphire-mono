import "./styles.css";
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
      <div onClick={() => moveCell(id, "up")}>
        <Button variant="iconic" icon={icons.arrowUp}></Button>
      </div>
      <button
        className="button is-primary is-small"
        onClick={() => moveCell(id, "up")}
      >
        <span className="icon">
          <i className="fas fa-arrow-up"></i>
        </span>
      </button>
      <button
        className="button is-primary is-small"
        onClick={() => moveCell(id, "down")}
      >
        <span className="icon">
          <i className="fas fa-arrow-down"></i>
        </span>
      </button>
      <button
        className="button is-primary is-small"
        onClick={() => deleteCell(id)}
      >
        <span className="icon">
          <i className="fas fa-times"></i>
        </span>
      </button>
    </ActionBarDiv>
  );
};

export default ActionBar;
