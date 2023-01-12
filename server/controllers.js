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
        req.status(400).send('error');
      })
  },

  getPostComments: (req, res) => {
    models.getPostComments(req.params.id)
      .then((response) => {
        console.log('getPostComments success controller');
        res.status(200).send(response);
      })
      .catch((error) => {
        console.log('getPostComments error controller');
        res.status(400).send('error');
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