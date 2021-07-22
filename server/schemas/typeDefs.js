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
      comments: [Comment]
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
      post(postId: ID!): Post
   }

   type Mutation {
      login(email: String!, password: String!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
      addPost(input: PostInput): User
      addComment(input: PostInput): Post
      removePost(postId: ID!): User
      removeComment(commentId: ID!): Post
      likePost(postId: ID!): Post
      likeComment(commentId: ID!): Comment
   }
`;

module.exports = typeDefs;
