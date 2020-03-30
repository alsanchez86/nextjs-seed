/**
 * Get a random quote from quotes array
 *
 * @param {array} collection
 * @returns {object}
 */
export const getRandomElementFromArray = collection => collection[Math.floor(Math.random() * collection.length)];