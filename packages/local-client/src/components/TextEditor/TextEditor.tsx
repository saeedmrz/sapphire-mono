import "./styles.scss";
import MDEditor from "@uiw/react-md-editor";
import { useState, useEffect, useRef } from "react";
import { Cell } from "state";
import { useActions } from "hooks/use-actions";

interface TextEditorProps {
  cell: Cell;
}

const TextEditor: React.FC<TextEditorProps> = ({ cell }) => {
  const mdEditorRef = useRef<HTMLDivElement | null>(null);
  const [editing, setEditing] = useState(false);
  // const [value, setValue] = useState("# Header");
  const { updateCell } = useActions();

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
          onChange={(text) => updateCell(cell.id, text || "")}
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
