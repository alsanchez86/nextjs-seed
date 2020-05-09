import data from "./data.json";
import { getRandomElementFromArray } from "../../../utils";

export default (request, response) => {
    const { author } = request?.query;
    let quote = (author) ? data.filter(e => e.author.toLowerCase().includes(author.toLowerCase())) : getRandomElementFromArray(data);

    return response
        .status(200)
        .json(quote);
};