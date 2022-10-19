import { Fragment, useEffect } from "react";
import AddCell from "../AddCell/AddCell";
import CellListItem from "../CellListItem/CellListItem";
import { CellListDiv } from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchCells, getSelectedCells } from "store/cellsSlice";
import { Cell } from "store/Cell.types";

const CellList: React.FC = () => {
  const newCells = useAppSelector(getSelectedCells);
  const cells = newCells.order.map((id: string) => newCells.data[id]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCells());
  }, []);

  const renderedCells = cells.map((cell: Cell) => (
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
