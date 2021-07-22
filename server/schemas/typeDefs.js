const { gql } = require('apollo-server-express');

const typeDefs = gql`
   input PostInput {
      content: String!
      date: Int!
      postedBy: User!
   }
   type User {
      _id: ID
      username: String!
      name: String
      email: String!
      password: String
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
      content: String!
      date: Int!
      likes: [User]
      postedBy: User
      likeCount: Int
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
      addUser(username: String!, name: String!, email: String!, password: String!): Auth
      addPost(input: PostInput): Post
      addComment(input: PostInput): Post
      removePost(postId: ID!)
      removeComment(commentId: ID!): Post
      likePost(postId: ID!): Post
      likeComment(commentId: ID!): Comment
   }
`;

module.exports = typeDefs;
