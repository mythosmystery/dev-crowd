const { gql } = require('apollo-server-express');

const typeDefs = gql`
   input PostInput {
      content: String!
      date: Int!
      likes: Int
   }
   type User {
      _id: ID
      username: String
      email: String
      bookCount: Int
      posts: [Post]
   }
   type Post {
      content: String!
      date: Int!
      likes: Int
   }
   type Comment {
      content: String!
      date: Int!
      likes: Int
   }
   type Auth {
      token: ID!
      user: User
   }

   type Query {
      users: [User]!
      user(userId: ID!): User
      me: User!
   }

   type Mutation {
      login(email: String!, password: String!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
      addPost(input: PostInput): User
   }
`;

module.exports = typeDefs;
