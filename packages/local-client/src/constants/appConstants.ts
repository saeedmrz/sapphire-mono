export const APP_NAME = "Code Class";

export const APP_DESCRIPTION = `Code Class consists of two features, adding a 
block of code then write documentations for that. This is useful for personal 
usage, for taking notes, using inside classes. The application is so fast, using 
technologies like React, ESbuild as Bundler.`;

export const APP_HTML_CODE = `
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
