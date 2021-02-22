'use strict'

const routes = require('express').Router()
const userRoutes = require('./userRoutes');
const Handler = require('../handler')

routes.get('/', Handler.getPong)
routes.use('/user', userRoutes);

module.exports = routes
