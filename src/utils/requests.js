import fetcher from "./fetcher";
import getApiUrl from "./get-api-url";

export const requestFilms = (name = "") => {
    return fetcher(`https://api.tvmaze.com/search/shows?q=${name}`);
}

export const requestQuote = (args) => {
    const localUrl = getApiUrl({
        ...args
        // name: "local"
    });
    return fetcher(`${localUrl}get-quote`);
}