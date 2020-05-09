/**
 * Metajob Endpoints
 *
 * ATENTION: If Dev mode, endpoints will be overwritten from endpoints defined on mock.json file
 *
 */

const dev = (process.env.NODE_ENV !== "production");
const folder = "./static/";
const endpoints = [
        "candidate-profile.json",
        "labor-intelligence-engine.json",
        "management-portal.json",
        "profiling.json",
        "skills-plus.json",
        "shows.json"
    ]
    .map(e => require(`${folder}${e}`))
    .reduce((a, b) => a.concat(b));

function getEndpointName (endpoint = {}){
    return (Object.keys(endpoint)[0] || "");
}

module.exports = dev ? (data => {
    const mock = require(`${folder}mock.json`);
    const mapped = data.map(e => (mock.filter(m => getEndpointName(e) === getEndpointName(m))[0] || e));
    // Add endpoints from mock.json that doesnt exists on any others endpoints
    mock.map(e => {
        const exists = mapped.filter(m => getEndpointName(e) === getEndpointName(m))[0];
        if (!exists){
            mapped.push(e);
        }
    });
    return mapped;
})(endpoints) : endpoints;