/**
 * NextJS config
 *
 * See for more information: https://nextjs.org/docs/api-reference/next.config.js/introduction
 *
 */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const endpoints = require("./config/endpoints");
const environment = require("./config/environment");

function getExternalUrl () {
    const protocol = environment.external.protocol;
    const host = environment.external.host;
    const port = environment.external.port;
    const context = environment.external.context;

    return [
        protocol,
        "://",
        host,
        port ? `:${port}` : "",
        context ? `/${context}` : "",
        "/"
    ].join("");
}

module.exports = (phase) => {
    const dev = (phase === PHASE_DEVELOPMENT_SERVER);
    const assetPrefix = getExternalUrl();
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