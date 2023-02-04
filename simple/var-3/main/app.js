const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

module.exports = app;