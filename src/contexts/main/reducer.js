import { generateState } from "./utils";

export default (state, action) => {
    switch (action.type) {
        case "UPDATE_SHOWS":
            return updateShows(state, action.value);

        default:
            return state;
    }
}

const updateShows = (state, shows) => {
    return generateState({
        counter: state.counter,
        shows
    });
}