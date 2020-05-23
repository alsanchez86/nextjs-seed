import { setCache, getCache } from "./cache";
import { updateState } from "./utils";

export default (state, action) => {
    let newCache;
    let cache = getCache();

    switch (action.type) {
        case "LOAD_CACHE":
            newCache = updateState(cache, action.value);
            break;

        case "SET_LOADING":
            newCache = updateState(cache, {
                loadingPage: action.value
            });
            break;

        default:
            newCache = cache;
            break;
    }
    setCache(newCache);
    return newCache;
}