const db = require('./db.js');

module.exports = {
  getPosts: () => {
    return db.Posts.find({});
  },

  getComments: (id) => {
    return db.Posts.findById(id);
  }
}