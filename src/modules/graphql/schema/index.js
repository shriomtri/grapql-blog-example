const { GraphQLSchema, printSchema, GraphQLObjectType, GraphQLString } = require('graphql')

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    currentTime: {
      type: GraphQLString,
      resolve: () => {
        const isoString = new Date().toISOString();
        return isoString.slice(11, 19);
      }
    }
  }
})

const schema = new GraphQLSchema({
  query: QueryType,
});

module.exports = { schema }

console.log(printSchema(schema));
