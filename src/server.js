require("dotenv").config();
// import express from 'express'
const express = require("express");
const app = express();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const port = process.env.PORT || 8888;
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// const connection = require("./config/database");
// connection.query("SELECT * FROM `Users`", function (err, results, fields) {
//   console.log(">>>result = ", results); // results contains rows returned by server
// });
configViewEngine(app);
// /hoale là tiền tố đứng trước link
app.use("/hoale", webRoutes);
app.listen(port);
