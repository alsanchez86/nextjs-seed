/**
 * NextJS custom server
 *
 */

const environment = require("../index");
const express = require("express");
const morgan = require('morgan');
const next = require("next");
const app = next({ dev: false });
const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const server = express();
        const stdout = morgan(":date[iso] :method :status :url - :response-time ms", {
            skip: (req, res) => (res.statusCode < 400)
        });

        // Morgan logs "middlewares"
        server.use(stdout);

        // Init server app! :)
        server
            .all("*", (req, res) => handle(req, res))
            .listen(environment.private.port, (error) => {
                if (error) {
                    throw error;
                }
                // Show info on console
                console.log("> Environment:", environment);
        });
});