"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serve = void 0;
var express_1 = __importDefault(require("express"));
var http_proxy_middleware_1 = require("http-proxy-middleware");
var path_1 = __importDefault(require("path"));
var cells_1 = require("./routes/cells");
var serve = function (port, filename, dir, useProxy) {
    var app = express_1.default();
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
    app.use(cells_1.createCellsRouter(filename, dir));
    if (useProxy) {
        app.use(http_proxy_middleware_1.createProxyMiddleware({
            target: "http://localhost:3000",
            ws: true,
            logLevel: "silent",
        }));
    }
    else {
        var packagePath = require.resolve("local-client/build/index.html");
        app.use(express_1.default.static(path_1.default.dirname(packagePath)));
    }
    return new Promise(function (resolve, reject) {
        app.listen(port, resolve).on("error", reject);
    });
};
exports.serve = serve;
