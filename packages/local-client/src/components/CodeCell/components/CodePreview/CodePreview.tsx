import "./CodePreview.style.scss";
import { useRef, useEffect } from "react";
import { PreviewError } from "./CodePreview.style";
import { APP_HTML_CODE } from "constants/appConstants";

interface PreviewProps {
  code: string;
  bundlingError: string;
}

const Preview: React.FC<PreviewProps> = ({ code, bundlingError }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = APP_HTML_CODE;
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, "*");
    }, 50);
  }, [code]);

  return (
    <div className="preview-wrapper">
      <iframe
        ref={iframe}
        title="preview"
        srcDoc={APP_HTML_CODE}
        sandbox="allow-scripts"
      />
      {bundlingError && <PreviewError>{bundlingError}</PreviewError>}
    </div>
  );
};

export default Preview;
