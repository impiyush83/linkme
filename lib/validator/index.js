'use strict'

const { celebrate, Joi, errors, Segments } = require('celebrate');

const addUserSchema = {
  [Segments.BODY]: Joi.object().keys({
    userName: Joi.string().required()
  })
}

module.exports = {
  addUserSchema: celebrate(addUserSchema)
}
