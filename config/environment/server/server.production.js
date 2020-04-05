/**
 * NextJS custom server
 * Contact info: asancpiz@everis.com
 *
 */

const environment = require("../config");
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
                console.log("> NextJS service ready on", `${environment.internal.protocol}://${environment.internal.host}:${environment.internal.port}`);
                console.log("> NextJS service expose on", `${environment.external.protocol}://${environment.external.host}:${environment.external.port}`);
        });
})