import "./CodePreview.style.scss";
import { useRef, useEffect } from "react";
import { PreviewError } from "./CodePreview.style";

interface PreviewProps {
  code: string;
  bundlingError: string;
}

const html = `
  <html>
    <head>
    <style>html { background-color: white;}</style>
    </head>
    <body>
      <div id="root"></div>
      <script>
        const handleError = (err) => {
          const root = document.querySelector('#root');
          root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>';
          console.error(err);
        };

        window.addEventListener('error', (event) => {
          event.preventDefault();
          handleError(event.error);
        });

        window.addEventListener('message', (event) => {
          try {
            eval(event.data);
          } catch (err) {
            handleError(err)
          }
        }, false);
      </script>
    </body>
  </html>
`;

const Preview: React.FC<PreviewProps> = ({ code, bundlingError }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;

    // irade 1 tedade codemun ziad mishod bad az bundle hamasho mizashtim
    // tuye iframe (fk konam bazi browserha mian tedad ziad
    // code ro kam mikonan namayesh nemidan,error midan k
    // ziade), va irade2 tuye code mese reactDOM age </script> dashte bashe
    // ba <script> paein k tuye html hast ghati mishe in </script> bala
    // be onvane payane (baste shodane) tage script dakhele html dar
    // nazar grefte mishe va bad az </script> tuyte reactDOM age codi bashe
    // execute nemishe va error mide
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, "*");
    }, 50);
  }, [code]);

  return (
    <div className="preview-wrapper">
      <iframe
        ref={iframe}
        title="preview"
        srcDoc={html}
        sandbox="allow-scripts"
      />
      {bundlingError && <PreviewError>{bundlingError}</PreviewError>}
    </div>
  );
};

export default Preview;
