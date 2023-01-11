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
  }
}