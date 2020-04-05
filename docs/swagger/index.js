/**
 * Metajob Endpoints
 * Contact info: asancpiz@everis.com
 *
 * Swagger-ui local
 *
 */

const YAML = require("require-yml");
const map = require.main.require("./docs/swagger/map.json");
const yamlDocs = map.map(e => ("./docs/swagger/" + e.file)).filter(e => ((e.split(".").pop() === "yaml") || (e.split(".").pop() === "yml"))).map(YAML);
const jsonDocs = map.map(e => ("./docs/swagger/" + e.file)).filter(e => (e.split(".").pop() === "json")).map(require.main.require);
const data = yamlDocs.concat(jsonDocs);

module.exports = data;