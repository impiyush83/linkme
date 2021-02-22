'use strict'

const Constants = {

  BASE_URL: `/rating-service`,

  GOOGLE_ACCOUNT_EMAIL_ADDRESS: process.env.GOOGLE_ACCOUNT_EMAIL_ADDRESS,

  GOOGLE_ACCOUNT_PASSWORD: process.env.GOOGLE_ACCOUNT_PASSWORD,

  SERVER: {
    PORT: process.env.PORT || 3000
  },

  MONGO: {
    DATABASE: {
      NAME: 'linkme',
      CONNECTION_URI: process.env.MONGODB_URI || `mongodb://localhost/linkme`,
      TEST_CONNECTION_URI: `mongodb://localhost/linkm`
    }
  }
}

module.exports = Constants
