/**
 * NextJS config
 *
 * See for more information: https://nextjs.org/docs/api-reference/next.config.js/introduction
 *
 */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const environment = require("./config/environment/config");
const endpoints = require("./config/endpoints");

module.exports = (phase) => {
    const config = {
        publicRuntimeConfig: {
            dev: (phase === PHASE_DEVELOPMENT_SERVER),
            environment,
            endpoints
        }
    };
    return config;
};