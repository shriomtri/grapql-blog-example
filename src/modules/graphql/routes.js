const express = require('express');
const router = express.Router();
const { graphqlHTTP } = require('express-graphql')

const { schema } = require('./schema')

router.use('/', (req, res) => {
  graphqlHTTP({
    schema,
    graphiql: true
  })(req, res);
})

module.exports = router;
