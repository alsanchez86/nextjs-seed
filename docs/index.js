
const YAML = require("require-yml");
const swaggerDocuments = require("./mapping.json");
const swaggerRequiresYaml = swaggerDocuments.map(e => ("./docs/" + e.file)).filter(e => ((e.split(".").pop() === "yaml") || (e.split(".").pop() === "yml"))).map(YAML);
const swaggerRequiresJson = swaggerDocuments.map(e => ("./" + e.file)).filter(e => (e.split(".").pop() === "json")).map(require);
const swaggerRequires = swaggerRequiresYaml.concat(swaggerRequiresJson);

module.exports = swaggerRequires;