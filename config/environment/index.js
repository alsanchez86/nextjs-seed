/**
 * Metajob Environments
 *
 * See for more information: https://nextjs.org/docs/api-reference/next.config.js/environment-variables
 * Overwrite node environment variables: https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html
 *
 */

// console.log("process", process);

module.exports = {
    private: {
        protocol: process.env.PRIVATE_PROTOCOL,
        host: process.env.PRIVATE_HOSTNAME,
        port: process.env.PRIVATE_PORT,
        context: process.env.PRIVATE_CONTEXT,
        api: "api"
    },
    public: {
        protocol: process.env.PUBLIC_PROTOCOL,
        host: process.env.PUBLIC_HOSTNAME,
        port: process.env.PUBLIC_PORT,
        context: process.env.PUBLIC_CONTEXT,
        api: "api"
    }
};