const { gql } = require('apollo-server-express');

const typeDefs = gql`
   type User {
      _id: ID
      username: String!
      name: String
      email: String!
      token: Strign!
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
   }
   type Comment {
      _id: ID
      content: String!
      date: Int!
      likes: [User]
      postedBy: User
      likeCount: Int
   }

   input UserInput {
      username: String!
      name: String!
      email: String!
      password: String!
   }

   type Query {
      getUsers: [User]!
      getUser(userId: ID!): User
      me: User!
      getPosts: [Post]!
      getPost(postId: ID!): Post
      getComments(postId: ID!): [Comment]
      getComment(postId: ID!, commentId: ID!): Comment
   }

   type Mutation {
      login(email: String!, password: String!): User
      addUser(userInput: UserInput): User
      addPost(content: String!): Post
      addComment(content: String!, postId: ID!): Post

      removePost(postId: ID!): String
      removeComment(commentId: ID!): Post

      likePost(postId: ID!): Post
      likeComment(commentId: ID!): Post
      unlikePost(postId: ID!): Post
      unlikeComment(commentId: ID!): Post
   }
`;

module.exports = typeDefs;
