const { 
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList 
} = require('graphql');

const Meta = new GraphQLObjectType({
  name: 'Meta',
  fields: {
    views: { type: new GraphQLNonNull(GraphQLInt)},
    likes: { type: new GraphQLNonNull(GraphQLInt)},
    slug: { type: new GraphQLNonNull(GraphQLString)},
  }
})

module.exports = { Meta };