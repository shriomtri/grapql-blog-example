require('dotenv').config()

const config = {
  local: {
    server: {
      port: process.env.PORT,
      hostName: "0.0.0.0",
    },

  database: {
    mongodb: {
      url: process.env.MGDB_CONNECTION_URL
    }
  }
  },
}


module.exports = config;
