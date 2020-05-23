// Force restauring cache
export const loadCache = (value = {}) => ({
    type: "LOAD_CACHE",
    value
});

// Set loading value
export const setLoading = (value = false) => ({
    type: "SET_LOADING",
    value
});