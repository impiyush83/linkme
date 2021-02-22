'use strict'

const Service = require('../services')

const getPong = function (req, res) {
  const response = Service.getPong();
  res.status(200).json({ message: response })
}

module.exports = {
  getPong
}
