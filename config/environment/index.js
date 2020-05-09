/**
 * Metajob Environments
 *
 * See for more information: https://nextjs.org/docs/api-reference/next.config.js/environment-variables
 * Overwrite node environment variables: https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html
 *
 * Priority for configuration:
 * 1. Environment variables (system or docker container)
 * 2. Endpoint static configuration
 *
 */

// Import environment static values from environment file
const static = require(`./static/${process.env.NODE_ENV}.json`);
// Get values from environment variables
// Internal
const envPrivateProtocol = process.env.PRIVATE_PROTOCOL;
const envPrivateHostname = process.env.PRIVATE_HOSTNAME;
const envPrivatePort = parseInt(process.env.PRIVATE_PORT, 10);
const envPrivateContext = process.env.PRIVATE_CONTEXT;
// External
const envPublicProtocol = process.env.PUBLIC_PROTOCOL;
const envPublicHostname = process.env.PUBLIC_HOSTNAME;
const envPublicPort = parseInt(process.env.PUBLIC_PORT, 10);
const envPublicContext = process.env.PUBLIC_CONTEXT;

// Update external environment from priority configuration
// Internal
static.internal.protocol = (envPrivateProtocol || static.internal.protocol);
static.internal.host = (envPrivateHostname || static.internal.host);
static.internal.port = (envPrivatePort || static.internal.port);
static.internal.context = (envPrivateContext || static.internal.context);

// External
static.external.protocol = (envPublicProtocol || static.external.protocol);
static.external.host = (envPublicHostname || static.external.host);
static.external.port = (envPublicPort || static.external.port);
static.external.context = (envPublicContext || static.external.context);

module.exports = static;