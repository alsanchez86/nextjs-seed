import fetcher from "./fetcher";
import getEndpoint from "./get-endpoint"; // Get endpoint from ./config/endpoints
import getEnvironmentApi from "./get-environment-api"; // Use when do a request to Nextjs API. From inside (private) or outside (public)

export const requestFilms = (args) => {
    const q = args?.q;
    const endpoint = getEndpoint({
        name: "tvmaze",
        ...args
    });

    return fetcher(`${endpoint}shows?q=${q}`, {
        method: "GET"
    });
}

export const requestQuote = (args) => {
    const endpoint = getEnvironmentApi({
        ...args
    });

    return fetcher(`${endpoint}get-quote`, {
        method: "GET"
    });
}