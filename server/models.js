const db = require('./db.js');

module.exports = {
  getPosts: () => {
    return db.Posts.find({});
  }
}