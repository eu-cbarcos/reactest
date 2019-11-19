export default `
  type Post {
    id: ID!
    title: String!
    description: String!
    createdAt: String
    updatedAt: String
  }
  type Query{
    posts: [Post!]!
  }
  type Mutation {
    createPost(title: String!, description: String!): Post!
  }
`;