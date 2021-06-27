const express = require("express");
const app = express();
const morgan = require("morgan");

// Modul untuk logger yang berfungsi untuk pencatatan tiap request ke server
app.use(morgan("dev"));

app.get("/", function (req, res) {
    res.send("Hello");
})

module.exports = app;
