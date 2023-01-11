const models = require('./models.js');

module.exports = {
  getPosts: (req, res) => {
    models.getPosts()
      .then((response) => {
        console.log('success in controllers');
        res.status(200).send(response);
      })
      .catch((error) => {
        console.log('error in controllers');
        res.status(400).send('error');
      })
  }
}