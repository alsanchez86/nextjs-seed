import { setCache, getCache } from "./cache";
import { updateState } from "./utils";

export default (state, action) => {
    const newCache = (() => {
        let cache = getCache();

        switch (action.type) {
            case "LOAD_CACHE":
                return updateState(cache, action.value);

            case "SET_LOADING":
                return updateState(cache, {
                    loadingPage: action.value
                });

            default:
                return cache;
        }
    })();

    setCache(newCache);
    return newCache;
}