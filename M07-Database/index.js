const http = require("http");
const app = require("./app");
const connection = require("./db");
const server = http.createServer(app);

server.listen(5000, () => {
    console.log("Server Run");
    // connection;
})