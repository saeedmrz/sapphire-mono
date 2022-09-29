import "./styles.css";
import { useActions } from "hooks/use-actions";
import { AddCellDiv, Divider } from "./styles";

interface AddCellProps {
  previousCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ forceVisible, previousCellId }) => {
  const { insertCellAfter } = useActions();

  return (
    <AddCellDiv forceVisible={forceVisible}>
      <button
        className="button is-rounded is-primary is-small"
        onClick={() => insertCellAfter(previousCellId, "code")}
      >
        <span className="icon is-small">
          <i className="fas fa-plus" />
        </span>
        <span>Code</span>
      </button>
      <button
        className="button is-rounded is-primary is-small"
        onClick={() => insertCellAfter(previousCellId, "text")}
      >
        <span className="icon is-small">
          <i className="fas fa-plus" />
        </span>
        <span>Text</span>
      </button>
      <Divider></Divider>
    </AddCellDiv>
  );
};

export default AddCell;
