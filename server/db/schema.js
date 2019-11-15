export default `
  type Post {
    id: ID!
    title: String!
    description: String!
  }
  type Query{
    posts: [Post!]!
  }
`;