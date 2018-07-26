const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api_routes = require('./routes/api_routes');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/gt_feb_08', { useNewUrlParser: true });

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

api_routes(app);

app.listen(port, () => console.log(`Listening on port ${port}`));