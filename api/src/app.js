const express = require("express");
const dotenv = require("dotenv").config();
const cors = require('cors');
const router = require('./routes/leadRouter');
const app = express();


app.set("port", process.env.PORT || 3003);
app.use(cors());
app.use("/api", router);
app.use(express.json());

module.exports = app;