import { useEffect } from "react";
import CodeEditor from "../CodeEditor/CodeEditor";
import Preview from "../CodePreview/CodePreview";
import Resizable from "../Resisable/Resisable";
import { Cell } from "store/Cell.types";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  createBundle,
  getSelectedBundle,
  createBundles,
} from "store/bundlesSlice";
import { updateCell, saveCells } from "store/cellsSlice";
import { useCumulativeCode } from "hooks/use-cumulative-code";
import { ProgressDiv, ResiableWrapper, Result } from "./styles";
import Spinner from "components/common/Spinner/Spinner";

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(getSelectedBundle);
  const bundle = state[cell.id];
  const cumulativeCode = useCumulativeCode(cell.id);

  useEffect(() => {
    if (!bundle) {
      dispatch(createBundles({ input: cumulativeCode, cellId: cell.id }));
      return;
    }
    const timer = setTimeout(async () => {
      dispatch(createBundles({ input: cumulativeCode, cellId: cell.id }));
    }, 750);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cumulativeCode, cell.id, createBundle]);

  return (
    <Resizable direction="vertical">
      <ResiableWrapper>
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) =>
              dispatch(updateCell({ id: cell.id, content: value }))
            }
          />
        </Resizable>
        <Result>
          {!bundle || bundle.loading ? (
            <ProgressDiv>
              <Spinner />
            </ProgressDiv>
          ) : (
            <Preview code={bundle.code} bundlingError={bundle.err} />
          )}
        </Result>
      </ResiableWrapper>
    </Resizable>
  );
};

export default CodeCell;
