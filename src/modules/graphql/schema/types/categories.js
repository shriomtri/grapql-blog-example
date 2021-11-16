const { 
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList 
} = require('graphql');

const Categories = new GraphQLObjectType({
  name: 'Category',
  fields: {
    categoryId: { type: new GraphQLNonNull(GraphQLInt) },
    categoryName: { type: new GraphQLNonNull(GraphQLString) }
  }
})


module.exports = { Category: Categories };