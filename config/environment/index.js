/**
 * Metajob Endpoints
 * Contact info: asancpiz@everis.com
 *
 * process.env.NODE_ENV; // Node environment variable.
 * See for more information: https://nextjs.org/docs/api-reference/next.config.js/environment-variables
 * Overwrite node environment variables: https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html
 *
 * Priority for configuration:
 * - Environment variables (system or docker container)
 * - Endpoint static configuration
 *
 */

// Import environment static values from environment file
const environment = require(`./static/${process.env.NODE_ENV}.json`);
// Get values from environment variables
// Internal
const envPrivateHostname = process.env.PRIVATE_HOSTNAME;
const envPrivateProtocol = process.env.PRIVATE_PROTOCOL;
const envPrivatePort = parseInt(process.env.PRIVATE_PORT, 10);
// External
const envPublicHostname = process.env.PUBLIC_HOSTNAME;
const envPublicProtocol = process.env.PUBLIC_PROTOCOL;
const envPublicPort = parseInt(process.env.PUBLIC_PORT, 10);

// Update external environment from priority configuration
// Internal
environment.internal.host = (envPrivateHostname) ? envPrivateHostname : environment.internal.host;
environment.internal.protocol = (envPrivateProtocol) ? envPrivateProtocol : environment.internal.protocol;
environment.internal.port = (envPrivatePort) ? envPrivatePort : environment.internal.port;
// External
environment.external.host = (envPublicHostname) ? envPublicHostname : environment.external.host;
environment.external.protocol = (envPublicProtocol) ? envPublicProtocol : environment.external.protocol;
environment.external.port = (envPublicPort) ? envPublicPort : environment.external.port;

module.exports = environment;