import { ApolloError,PubSub } from "apollo-server-express";

const pubSub = new PubSub();
const POST_ADDED = 'POST_ADDED';

export default {
  Query: {
    posts: (parent,args, {db})=>db.post.findAll(),
  },
  Mutation: {
    createPost: async (parent, {title,description},{db}) => {
      if(title && description){
        const post = await db.post.create({title,description});
        pubSub.publish(POST_ADDED,{postAdded: {id: post.id, title, description}})
        return post ;
      }
      throw new ApolloError('Ocurrio un error');
    }
  },
  Subscription: {
    postAdded: {
      subscribe: () => pubSub.asyncIterator([POST_ADDED])
    }
  }
};