/**
 * Get Nextjs api endpoint from environment internal (ssr) or externalr (!ssr).
 *
 */

import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export default (args) => {
    const environment = args?.ssr ? publicRuntimeConfig.environment.internal : publicRuntimeConfig.environment.external;
    const protocol = environment.protocol;
    const host = environment.host;
    const port = environment.port;
    const context = environment.context;
    const api = environment.api;

    return [
        protocol,
        "://",
        host,
        port ? `:${port}` : "",
        context ? `/${context}` : "",
        api ? `/${api}` : "",
        "/"
    ].join("");
}