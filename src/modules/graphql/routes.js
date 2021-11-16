const express = require('express');
const router = express.Router();
const { graphqlHTTP } = require('express-graphql');

const { schema } = require('./schema')


module.exports = (connectedDbs) => {

  return router.use('/', (req, res) => {
    graphqlHTTP({
      schema,
      context: { db: connectedDbs.db},
      graphiql: true
    })(req, res);
  })

};
