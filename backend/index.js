const express = require('express');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();
app.use(cors());
requireDir('./src/models');
app.use(express.json());

app.use('/api', require('./src/routes'));

app.listen(3333)