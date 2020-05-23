/**
 * Get Nextjs api endpoint from environment private (ssr) or public (!ssr).
 *
 */

import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export default (args) => {
    const environment = args?.ssr ? publicRuntimeConfig.environment.private : publicRuntimeConfig.environment.public;
    const protocol = environment.protocol;
    const host = environment.host;
    const port = environment.port;
    const context = environment.context;

    return [
        protocol,
        "://",
        host,
        (port ? `:${port}` : ""),
        (context ? `/${context}` : ""),
        "/"
    ].join("");
}