const { 
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList 
} = require('graphql');

const Media = new GraphQLObjectType({
  name: 'Media',
  fields: {
    images: { type: new GraphQLNonNull(GraphQLString) },
    audio: { type: new GraphQLNonNull(GraphQLString) }
  }
})

module.exports = { Media };