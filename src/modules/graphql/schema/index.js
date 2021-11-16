const { GraphQLSchema, printSchema, GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLList, GraphQLInt } = require('graphql')

const { Post } = require('./types/post')
const { connectionDbs } = require('../../../utils/database');

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    currentTime: {
      type: GraphQLString,
      
      resolve: () => {
        const isoString = new Date().toISOString();
        return isoString.slice(11, 19);
      }
    },
    postsList: {
      type: new GraphQLList(new GraphQLNonNull(Post)),
      args: {
        search: {type: GraphQLString, defaultValue: null},
        pageIndex: { type: new GraphQLNonNull(GraphQLInt), defaultValue: 0 },
        pageLength: { type: new GraphQLNonNull(GraphQLInt), defaultValue: 10}
      },
      resolve: async (source, args, context, info) => {
        // get post data
        const query = {$or: []};
        if(args.search && args.search.trim().length > 3) {
          query.$or.push({'postLongDescription': new RegExp(args.search, 'i')})
        }else {
          delete query.$or;
        }
        const postList = await context.db.collection('posts').find(query).skip(args.pageIndex).limit(args.pageLength).toArray();
        return postList;
      }
      
    }
  }
})

const schema = new GraphQLSchema({
  query: QueryType,
});

module.exports = { schema }

console.log(printSchema(schema));
