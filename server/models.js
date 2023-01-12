const db = require('./db.js');

module.exports = {
  getPosts: () => {
    return db.Posts.find({});
  },

  getComments: (id) => {
    return db.Posts.findById(id);
  },

  submitPost: (body) => {
    console.log('in models');
    const postContent = {
      user: body.user,
      date: new Date(),
      title: body.title,
      body: body.body,
    }
    return db.Posts.create(postContent);
  }
}