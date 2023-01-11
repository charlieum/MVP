require("dotenv").config();
const express = require("express");
const cors = require('cors');
const path = require("path");
const controllers = require('./controllers.js');
const app = express();

const corsOptions = {
  origin: 'http://localhost',
  methods: ['get', 'post', 'put', 'patch'],
  maxAge: '3600',
};

app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/public"))); //lead to index.html page

app.use(cors(corsOptions));

app.get('/posts', controllers.getPosts);

app.listen(8080);
console.log(`Listening at http://localhost:8080`);
