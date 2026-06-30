const router = require('./api/router')
const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.use(express.json());
app.use(router)

module.exports.handler = serverless(app);
