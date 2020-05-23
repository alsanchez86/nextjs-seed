import { initialState } from "./initial-state";

export const createState = (state = {}) => ({
    ...initialState,
    ...state
});

export const updateState = (state, update) => ({
    ...state,
    ...update
});