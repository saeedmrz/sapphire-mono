import { useAppSelector } from "store/hooks";
import { SHOW_FUNCTION } from "constants/hooksConstants";

export const useCumulativeCode = (cellId: string) => {
  return useAppSelector((state) => {
    const { data, order } = state.cells;
    const orderedCells = order.map((id: string) => data[id]);

    const showFuncNoop = "var show = () => {}";
    const cumulativeCode = [];
    for (let c of orderedCells) {
      if (c.type === "code") {
        if (c.id === cellId) {
          cumulativeCode.push(SHOW_FUNCTION);
        } else {
          cumulativeCode.push(showFuncNoop);
        }
        cumulativeCode.push(c.content);
      }
      if (c.id === cellId) {
        break;
      }
    }
    return cumulativeCode;
  }).join("\n");
};
