require('dotenv').config()

const config = {
  local: {
    server: {
      port: 8080,
      hostName: "0.0.0.0",
    },

  database: {
    mongodb: {
      url: encodeURI(process.env.MGDB_CONNECTION_URL)
    }
  }
  },
}


module.exports = config;
