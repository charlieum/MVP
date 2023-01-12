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

  getComments: (req, res) => {
    models.getComments(req.params.id)
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((error) => {
        req.status(400).send('error');
      })
  },

  submitPost: (req, res) => {
    console.log(req);
    models.submitPost(req.body)
      .then((response) => {
        console.log('success controllers');
        res.status(200).send(response);
      })
      .catch((error) => {
        console.log('error controllers');
        res.status(400).send('error');
      })
  }
}