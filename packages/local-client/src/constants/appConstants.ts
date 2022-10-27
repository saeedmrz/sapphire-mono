export const APP_NAME = "Training";

export const APP_DESCRIPTION =
  "This application helps you to write code and write documentation for that code. The application compiler is so fast. You can add text boxes and code boxes as many as you like.";

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
