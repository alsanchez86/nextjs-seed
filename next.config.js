/**
 * NextJS config
 *
 * See for more information: https://nextjs.org/docs/api-reference/next.config.js/introduction
 *
 */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const endpoints = require("./config/endpoints");
const environment = require("./config/environment");

function getPubliclUrl () {
    const protocol = environment.public.protocol;
    const host = environment.public.host;
    const port = environment.public.port;
    const context = environment.public.context;

    return [
        protocol,
        "://",
        host,
        (port ? `:${port}` : ""),
        (context ? `/${context}` : ""),
        "/"
    ].join("");
}

module.exports = (phase) => {
    const dev = (phase === PHASE_DEVELOPMENT_SERVER);
    const assetPrefix = getPubliclUrl();
    const config = {
        assetPrefix,
        publicRuntimeConfig: {
            dev,
            endpoints,
            environment
        }
    };
    return config;
};