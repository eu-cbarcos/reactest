import { ApolloError } from "apollo-boost";

export default {
  Query: {
    posts: (parent,args, {db})=>db.post.findAll(),
  },
  Mutation: {
    createPost: async (parent, {title,description},{db}) => {
      if(title && description){
        const post = await db.post.create({title,description});
        return post ;
      }
      throw new ApolloError('Ocurrio un error');
    }
  }
};