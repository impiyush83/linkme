'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const linkSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  linkName: {
    type: String,
    required: true 
  },
  linkUrl: {
    type: String,
    required: true,
    unique: true
  }
}, {
  versionKey: false,
  timestamps: true
})



// [
//   {
//     userName: P,
//     linkName: 'Facebook'  
//     linkUrl: 'https://s.com'  
//   },
//   {
//     userName: P,
//     linkName: 'Instagram',
//     linkUrl: 'https://s.com'   
//   },
//   {
//     userName: S,
//     linkName: 'Instagram'  
//   },




// ]

module.exports = mongoose.model('links', linkSchema);
