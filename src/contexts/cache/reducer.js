import { setCache, getCache } from "./cache";
import { updateState } from "./utils";

export default (state, action) => {
    const newCache = (() => {
        let cache = getCache();

        switch (action.type) {
            case "LOAD_CACHE":
                return cache;

            case "SET_LOADING":
                return updateState(cache, {
                    loadingPage: action.value
                });

            case "ADD_TO_HISTORY":
                return addToHistory(cache, action.value);

            default:
                return cache;
        }
    })();

    setCache(newCache);
    return newCache;
}

const addToHistory = (cache = {}, value = "") => {
    let historyShowSearchs = cache?.historyShowSearchs;

    historyShowSearchs.push({
        id: historyShowSearchs?.length,
        text: value
    });

    return updateState(cache, {
        historyShowSearchs
    });
}