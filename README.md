# sapphire-mono

Code Class consists of two features, adding a block of code then write documentations for that. This is useful for personal usage, for taking notes, using inside classes. The application is so fast, using technologies like React, ESbuild as Bundler.

## Branches
The application consists of two branches, master and toolkit. The only difference is state management technology. 

###### Master
For the master branch I have used Redux.
###### Toolkit
And for the toolkit I have used Redux Toolkit.

## Technologies

###### Project Management
- Lerna
###### Client
- TypeScript
- React
- ESbuild
- Redux
- Immer
- Redux Toolkit
- WASM
- Styled Components
- SCSS
- Axios
###### API
- Express
- TypeScript
###### CLI
- Commander
- TypeScript

## How To Install
In the terminal run the command: lerna bootstrap

## How To Use
1. cd packages/cli/dist
2. node index.js serve 
   - This command will run the app on default port 4005 and creates notebook.js file inside dist folder.
   - You can use --port option to run the project on your own port (e.g. --port=4003).
   - You can write a directory option for the serve command in order to create your own directory and file for your notes and codes (e.g. mynote.js or projects/note1.js).
   - The final full command with options would be like this: node index.js serve myfolder/note.js --port=4001
3. In new terminal tab: cd packages/local-api then run: npm start
4. In new terminal tab: cd packages/local-client then run: npm start
5. After the client starts on your browser you can navigate to localhost:4005 to use the application.
