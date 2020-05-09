/**
 * NextJS custom server
 *
 */

const environment = require("../");
const express = require("express");
const next = require("next");
const app = next({ dev: false });
const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const server = express();

        // Init server app! :)
        server
            .all("*", (req, res) => handle(req, res))
            .listen(environment.internal.port, (error) => {
                if (error) {
                    throw error;
                }
                // Show info on console
                console.log("> Environment:", environment);
        });
});