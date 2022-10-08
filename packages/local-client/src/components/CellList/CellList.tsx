import { Fragment, useEffect } from "react";
import { useTypedSelector } from "hooks/use-typed-selector";
import AddCell from "../AddCell/AddCell";
import CellListItem from "../CellListItem/CellListItem";
import { useActions } from "hooks/use-actions";
import { CellListDiv } from "./styles";

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );
  const { fetchCells } = useActions();

  useEffect(() => {
    fetchCells();
  }, []);

  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ));

  return (
    <CellListDiv>
      <AddCell forceVisible={cells.length === 0} previousCellId={null} />
      {renderedCells}
    </CellListDiv>
  );
};

export default CellList;
