const dev = (process.env.NODE_ENV !== "production");
const folder = "./static/";
const ext = ".json";
let endpointsMock = [];
let endpoints = [
    "candidate-profile",
    "labor-intelligence-engine",
    "management-portal",
    "profiling",
    "skills-plus"
].map(e => (folder + e + ext)).map(require).reduce((a, b) => a.concat(b));

// ATENTION: If Dev mode, endpoints will be overwritten from endpoints defined on mock.json file
if (dev){
    endpointsMock = require(`${folder}mock${ext}`);
    endpoints = endpoints.map(endpoint => {
        const endpointMock = endpointsMock.filter(mock => Object.keys(endpoint)[0] === Object.keys(mock)[0])[0];
        if (endpointMock){
            endpoint = endpointMock;
        }
        return endpoint;
    });
}

module.exports = endpoints;