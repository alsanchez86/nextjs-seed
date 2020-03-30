const folder = "./static/";
const ext = ".json";
const endpoints = [
    "candidate-profile",
    "labor-intelligence-engine",
    "management-portal",
    "profiling",
    "skills-plus"
].map(e => (folder + e + ext)).map(require).reduce((a, b) => a.concat(b));

module.exports = endpoints;