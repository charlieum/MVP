const models = require('./models.js');

module.exports = {
  getPosts: (req, res) => {
    models.getPosts()
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((error) => {
        res.status(400).send('error');
      })
  },

  getPost: (req, res) => {
    models.getPost(req.params.id)
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((error) => {
        res.status(400).send('error');
      })
  },

  getPostComments: (req, res) => {
    models.getPostComments(req.params.id)
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((error) => {
        res.status(400).send('error single');
      })
  },

  getPostsComments: (req, res) => {
    console.log('in controller');
    models.getPostsComments()
      .then((response) => {
        console.log('success controller');
        res.status(200).send(response);
      })
      .catch((error) => {
        console.log('errror controller');
        res.status(400).send('error here');
      })
  },

  submitPost: (req, res) => {
    models.submitPost(req.body)
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((error) => {
        res.status(400).send('error');
      })
  }
}