import { useEffect } from "react";
import CodeEditor from "../CodeEditor/CodeEditor";
import Preview from "../CodePreview/CodePreview";
import Resizable from "../Resisable/Resisable";
import { Cell } from "state";
import { useActions } from "hooks/use-actions";
import { useTypedSelector } from "hooks/use-typed-selector";
import { useCumulativeCode } from "hooks/use-cumulative-code";
import { ProgressDiv, ResiableWrapper, Result } from "./styles";
import Spinner from "components/common/Spinner/Spinner";

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundles[cell.id]);
  const cumulativeCode = useCumulativeCode(cell.id);

  useEffect(() => {
    if (!bundle) {
      createBundle(cell.id, cumulativeCode);
      return;
    }
    const timer = setTimeout(async () => {
      createBundle(cell.id, cumulativeCode);
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
            onChange={(value) => updateCell(cell.id, value)}
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
