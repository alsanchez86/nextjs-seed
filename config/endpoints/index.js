/**
 * Metajob Endpoints
 * Contact info: asancpiz@everis.com
 *
 * ATENTION: If Dev mode, endpoints will be overwritten from endpoints defined on mock.json file
 *
 */

const dev = (process.env.NODE_ENV !== "production");
const { readdirSync } = require("fs");
const endpoints = readdirSync("./config/endpoints/static/").filter(e => e !== "mock.json").map(e => "./static/" + e).map(require).reduce((a, b) => a.concat(b));

module.exports = dev ? ((data) => {
    const mock = require("./static/mock.json");
    return data.map(e => (mock.filter(m => Object.keys(e)[0] === Object.keys(m)[0])[0] || e));
})(endpoints) : endpoints;