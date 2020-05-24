import { useEffect } from "react";
import { loadCache } from "./actions";
import { useCacheContextDispatch } from "./index";
import { initialState } from "./initial-state";

// Get data from sessionStorage
export const getCache = () => {
    let storage = (typeof(sessionStorage) !== "undefined") ? sessionStorage.getItem("cacheContextState") : null;
    let data = storage ? JSON.parse(storage) : {};
    return {
        ...initialState,
        ...data
    };
};

// Set data on sessionStorage
export const setCache = (state) => {
    if (typeof(sessionStorage) !== "undefined"){
        sessionStorage.setItem("cacheContextState", JSON.stringify(state));
    }
};

// Force restauring cache from a component
export const loadContextCache = () => {
    const contextDispatch = useCacheContextDispatch();

    useEffect(() => {
        const data = getCache();
        contextDispatch(loadCache(data));
    }, []);
}