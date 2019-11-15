export default {
  Query: {
    posts: (parent,args, {db})=>db.post.findAll(),
  },
};