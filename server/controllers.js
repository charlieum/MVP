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
        console.log('controller success > get Comments');
        res.status(200).send(response);
      })
      .catch((error) => {
        onsole.log('controller error > get Comments');
        req.status(400).send('error');
      })
  }
}