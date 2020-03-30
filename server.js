/**
 * NextJS custom server
 * Contact info: asancpiz@everis.com
 *
 * See for more information: https://nextjs.org/docs/advanced-features/custom-server
 * Basic Nextjs custom server example: https://github.com/zeit/next.js/blob/canary/examples/custom-server/server.js
 * Nextjs custom server with express: https://github.com/zeit/next.js/tree/canary/examples/custom-server-express
 *
 * TODO: Implement SSR Caching: https://github.com/zeit/next.js/blob/canary/examples/ssr-caching/server.js
 * TODO: https://medium.com/@anMagpie/secure-your-local-development-server-with-https-next-js-81ac6b8b3d68
 *
 */

const express = require("express");
const next = require("next");
const environment = require("./config/environment");
const swaggerUi = require("swagger-ui-express");
const swaggerDocuments = require("./docs/mapping.json");
const swaggerRequires = require("./docs");
const dev = (process.env.NODE_ENV !== "production");
const app = next({ dev });
const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const server = express();

        // If dev mode, expose swagger documentation on Nextjs API
        if (dev){
            swaggerDocuments.map((document, index) => server.use(`/swagger-ui/${document.path}`, swaggerUi.serve, swaggerUi.setup(swaggerRequires[index])));
        }

        // Init server app! :)
        server
            .all("*", (req, res) => handle(req, res))
            .listen(environment.internal.port, (error) => {
                if (error) {
                    throw error;
                }
                // Show info on console
                console.log("> Environment:", environment);
                console.log(`> NextJS service ready on ${environment.internal.protocol}://${environment.internal.host}:${environment.internal.port}`);
                console.log(`> NextJS service expose on ${environment.external.protocol}://${environment.external.host}:${environment.external.port}`);
        });
})