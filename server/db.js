const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://localhost:27017/mvp');

const postsSchema = new mongoose.Schema ({
  user: {type: String, required: true},
  date: {type: Date, required: true},
  title: {type: String},
  body: {type: String, required: true},
});

const Posts = mongoose.model('Posts', postsSchema);

module.exports = {
  Posts: Posts,
}
