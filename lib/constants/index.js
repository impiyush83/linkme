'use strict'

const Constants = {

  SERVER: {
    PORT: process.env.PORT || 3000
  },

  MONGO: {
    DATABASE: {
      NAME: 'linkme',
      CONNECTION_URI: process.env.MONGODB_URI || `mongodb://localhost/linkme`,
      TEST_CONNECTION_URI: `mongodb://localhost/linkme`
    }
  }
}

module.exports = Constants
