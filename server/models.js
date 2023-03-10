const db = require('./db.js');

module.exports = {
  getPosts: () => {
    return db.Posts.find({rootId:null});
  },

  getPost: (id) => {
    return db.Posts.findById(id);
  },

  getPostComments: (id) => {
    return db.Posts.find({rootId:id});
  },

  getPostsComments: () => {
    console.log('in models');
    return db.Posts.find({"rootId":{$ne:null}});
  },

  submitPost: (body) => {
    const postContent = {
      user: body.user,
      date: new Date(),
      title: body.title,
      body: body.body,
      rootId: body.rootId,
      parentId: body.parentId,
    }
    return db.Posts.create(postContent);
  }
}