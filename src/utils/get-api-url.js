/**
 * Get api absolute url endpoint from endpoint or environment (internal (ssr) or externalr (!ssr)).
 *
 */

import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

function getEndpoint (args){
    const ssr = args?.ssr;
    const name = args?.name;
    const filtered = publicRuntimeConfig?.endpoints.filter(e => e[name]).map(e => e[name]).pop();
    const endpoint = (filtered || ((ssr) ? publicRuntimeConfig?.environment?.internal : publicRuntimeConfig?.environment?.external));
    return endpoint;
}

export default (args) => {
    const endpoint = getEndpoint(args);
    const protocol = endpoint?.protocol;
    const host = endpoint?.host;
    const port = endpoint?.port;
    const aux = endpoint?.aux;
    return `${protocol}://${host}` + ((port) ? `:${port}`: "") + ((aux) ? `/${aux}/` : "");
};
