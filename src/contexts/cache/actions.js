// Force restauring cache
export const loadCache = () => ({
    type: "LOAD_CACHE"
});

// Set loading value
export const setLoading = (value = false) => ({
    type: "SET_LOADING",
    value
});

// Add show search to history
export const addToHistory = (value = "") => ({
    type: "ADD_TO_HISTORY",
    value
});