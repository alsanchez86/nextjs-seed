/**
 * Get api absolute url from endpoint (private (ssr) or public (!ssr)).
 *
 *
 */

import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

function getEndpoint (args){
    const name = args?.name;
    const endpoint = publicRuntimeConfig?.endpoints.filter(e => e[name]).map(e => e[name]).pop();
    return endpoint;
}

export default (args) => {
    const endpoint = getEndpoint(args);
    const protocol = endpoint?.protocol;
    const host = endpoint?.host;
    const aux = endpoint?.aux;

    return [
        protocol,
        "://",
        host,
        "/",
        (aux ? `${aux}/` : "")
    ].join("");
}