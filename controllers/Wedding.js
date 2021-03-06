
const weddingModel = require('../models/wedding');
const Wedding = {};


Wedding.getAll= (req, res) => {
  weddingModel.getImages()
    .then(data => {
      console.log(data)
      res.send({
        data
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err})
    })
}

Wedding.getPersonsPictures = (req, res) => {
  console.log(req.params.name);
  weddingModel.getSelectedPictures({
    person: req.params.name
  })
    .then(data => {
      console.log(data)
      res.send({
        data
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err})
    })
}

module.exports = Wedding;