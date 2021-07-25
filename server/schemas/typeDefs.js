const { gql } = require('apollo-server-express');

const typeDefs = gql`
   type User {
      _id: ID
      username: String!
      name: String
      email: String!
      followers: [User]
      following: [User]
      followerCount: Int
   }
   type Post {
      _id: ID
      content: String!
      date: Int!
      likes: [User]
      comments: [Comment]
      postedBy: User
      likeCount: Int
      commentCount: Int
      username: String
   }
   type Comment {
      _id: ID
      content: String!
      date: Int!
      likes: [User]
      postedBy: User
      likeCount: Int
   }
   type Auth {
      token: ID!
      user: User!
   }

   input UserInput {
      username: String!
      name: String!
      email: String!
      password: String!
   }

   type Query {
      users: [User]!
      user(userId: ID!): User
      me: User!

      posts: [Post]!
      post(postId: ID!): Post
      postsByUser(username: String!): [Post]

      comments(postId: ID!): [Comment]
      comment(postId: ID!, commentId: ID!): Comment
   }

   type Mutation {
      login(email: String!, password: String!): Auth
      addUser(userInput: UserInput): Auth
      addPost(content: String!): Post
      addComment(content: String!, postId: ID!): Post

      removePost(postId: ID!): String
      removeComment(commentId: ID!): Post

      likePost(postId: ID!): Post
      likeComment(commentId: ID!): Post
   }
`;

module.exports = typeDefs;
