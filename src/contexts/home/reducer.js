import { updateState } from "./utils";

export default (state, action) => {
    switch (action.type) {
        case "UPDATE":
            return updateState(state, {
                ...action.value
            });

        case "UPDATE_SHOWS":
            return updateState(state, {
                shows: action.value
            });

        case "UPDATE_QUOTE":
            return updateState(state, {
                quote: action.value
            });

        default:
            return state;
    }
}