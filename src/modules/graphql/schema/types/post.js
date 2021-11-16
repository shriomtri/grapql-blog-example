const { 
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList 
} = require('graphql');

const { Category } = require('./categories')
const { Media } = require('./media')
const { Meta } = require('./meta')

const Post = new GraphQLObjectType({
  name: 'Post',
  fields: {
    postId: { type: new GraphQLNonNull(GraphQLID) },
    postTitle: { type: new GraphQLNonNull(GraphQLString) },
    categories: {
      type: new GraphQLList(new GraphQLNonNull(Category)),
      resolve: async (source, args, context, info) => {
        // resolve categories
        return await Promise.all(source.categories.map((catId) => {
          return new Promise(async (resolve, reject) => {
            try {
            const category = await context.db.collection('categories').findOne({categoryId: catId})
            resolve(category)
            }catch(err) {
              reject(err)
            }
          });
        }))
      }
    },
    media: {
      type: new GraphQLNonNull(Media)
    },
    meta:  {
      type: new GraphQLNonNull(Meta)
    },
    postSmallDescription: {
      type: new GraphQLList(new GraphQLNonNull(GraphQLString))
    },
    postLongDescription: {
      type: new GraphQLList(new GraphQLNonNull(GraphQLString))
    }
  }
})

module.exports =  { Post };