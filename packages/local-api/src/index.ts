import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import path from "path";
import { createCellsRouter } from "./routes/cells";

export const serve = (
  port: number,
  filename: string,
  dir: string,
  useProxy: boolean
) => {
  const app = express();

  // Express.static does not work nicely with symbalic links(../node_modules...)
  // This is a shortcut that is pointing to other directory on your machine
  // app.use(express.static('../node_modules/local-client/build'))

  // require.resolve does not actually loads up a file, instead it's going to
  // apply nodes path resolution algorithm to figure out file location of that
  // index.html file
  // then we call path.dirname which will give us just everything up to that
  // build folder
  // packagePath is the absolute path to the actual local-client directory
  // on your machine

  // Whenever a request comes in first we try to match it inside the router
  // and if it doesn't match then we fall throw our middleware
  app.use(createCellsRouter(filename, dir));

  if (useProxy) {
    app.use(
      createProxyMiddleware({
        target: "http://localhost:3000",
        ws: true,
        logLevel: "silent",
      })
    );
  } else {
    const packagePath = require.resolve("local-client/build/index.html");
    app.use(express.static(path.dirname(packagePath)));
  }

  return new Promise<void>((resolve, reject) => {
    app.listen(port, resolve).on("error", reject);
  });
};
