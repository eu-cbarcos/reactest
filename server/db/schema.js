export default `
  type Post {
    id: ID!
    title: String!
    description: String!
  }
  type Query{
    posts: [Post!]!
  }
  type Mutation {
    createPost(title: String!, description: String!): Post!
  }
  type Subscription {
    postAdded: Post
  }
`;