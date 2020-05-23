export const updateContextState = (value = {}) => ({
    type: "UPDATE",
    value
});

export const updateShows = (value = []) => ({
    type: "UPDATE_SHOWS",
    value
});

export const updateQuote = (value = "") => ({
    type: "UPDATE_QUOTE",
    value
});