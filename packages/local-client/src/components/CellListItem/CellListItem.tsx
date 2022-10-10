import { Cell } from "state";
import CodeCell from "../CodeCell/CodeCell";
import TextEditor from "../TextEditor/TextEditor";
import ActionBar from "../ActionBar/ActionBar";
import { ActionBarWrapper, CellItem } from "./styles";

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  let child: JSX.Element;
  if (cell.type === "code") {
    child = (
      <>
        <ActionBarWrapper>
          <ActionBar id={cell.id} />
        </ActionBarWrapper>

        <CodeCell cell={cell} />
      </>
    );
  } else {
    child = (
      <>
        <TextEditor cell={cell} />
        <ActionBar id={cell.id} />
      </>
    );
  }

  return <CellItem>{child}</CellItem>;
};

export default CellListItem;
