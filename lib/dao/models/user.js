'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  }
}, {
  versionKey: false,
  timestamps: true
})

module.exports = mongoose.model('users', userSchema);
