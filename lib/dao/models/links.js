'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const linkSchema = new Schema({
  userName: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  linkId: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  linkName: {
    type: mongoose.Schema.Types.String,
    required: true 
  },
  linkUrl: {
    type: mongoose.Schema.Types.String,
    required: true
  }
}, {
  versionKey: false,
  timestamps: true
})

module.exports = mongoose.model('links', linkSchema);
