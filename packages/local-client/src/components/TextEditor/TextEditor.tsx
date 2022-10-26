import "./TextEditor.style.scss";
import MDEditor from "@uiw/react-md-editor";
import { useState, useEffect, useRef } from "react";
import { Cell } from "types/Cell.types";
import { useAppDispatch } from "store/hooks";
import { updateCell } from "store/cellsSlice";

interface TextEditorProps {
  cell: Cell;
}

const TextEditor: React.FC<TextEditorProps> = ({ cell }) => {
  const mdEditorRef = useRef<HTMLDivElement | null>(null);
  const [editing, setEditing] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        mdEditorRef.current &&
        event.target &&
        mdEditorRef.current.contains(event.target as Node)
      ) {
        return;
      }
      setEditing(false);
    };

    document.addEventListener("click", listener, { capture: true });

    return () => {
      document.removeEventListener("click", listener, { capture: true });
    };
  }, []);

  if (editing) {
    return (
      <div className="text-editor" ref={mdEditorRef}>
        <MDEditor
          value={cell.content}
          onChange={(text) =>
            dispatch(updateCell({ id: cell.id, content: text || "" }))
          }
        />
      </div>
    );
  }

  return (
    <div className="text-editor card" onClick={() => setEditing(true)}>
      <div className="card-content">
        <MDEditor.Markdown source={cell.content || "Click to edit"} />
      </div>
    </div>
  );
};

export default TextEditor;
