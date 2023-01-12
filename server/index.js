require("dotenv").config();
const express = require("express");
const cors = require('cors');
const path = require("path");
const controllers = require('./controllers.js');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/public"))); //lead to index.html page

app.use(cors());

app.get('/posts', controllers.getPosts);
app.get('/posts/:id', controllers.getPost);
app.get('/posts/comments/:id', controllers.getPostComments);
app.get('/posts/all/comments', controllers.getPostsComments);
app.post('/posts', controllers.submitPost);

app.listen(8080);
console.log(`Listening at http://localhost:8080`);
