/**
 * NextJS custom server
 * Contact info: asancpiz@everis.com
 *
 */

const environment = require("../config");
const express = require("express");
const next = require("next");
const app = next({ dev: true });
const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const swaggerUrl = "/swagger";
        const swaggerUiExpress = require("swagger-ui-express");
        const mustacheExpress = require("mustache-express");
        const swaggerData = require("../../../docs/swagger");
        const swaggerMapping = require("../../../docs/swagger/map.json");
        const server = express();

        // Expose swagger documentation on Nextjs API
        server.engine("mustache", mustacheExpress());
        server.set("view engine", "mustache");
        server.set("views", "./docs/swagger");
        server.get(swaggerUrl, function (req, res) {
            res.render("index", {data: swaggerMapping});
        });
        swaggerMapping.map((document, index) => server.use(`${swaggerUrl}/${document.path}`, swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerData[index])));

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
                console.log("> Swagger documents ready on", `${environment.external.protocol}://${environment.external.host}:${environment.external.port}${swaggerUrl}`);
        });
});