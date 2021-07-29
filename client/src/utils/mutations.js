import { gql } from '@apollo/client';

export const ADD_USER = gql`
   mutation addUser($userInput: UserInput!) {
      addUser(userInput: $userInput) {
         token
         user {
            _id
            username
            email
            name
         }
      }
   }
`;

export const LOGIN_USER = gql`
   mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
         token
         user {
            _id
            username
            email
            name
         }
      }
   }
`;
export const FOLLOW_USER = gql`
   mutation followUser($userId: ID!) {
      followUser(userId: $userId) {
         name
         username
         followers {
            name
            username
         }
      }
   }
`;
export const UNFOLLOW_USER = gql`
   mutation unfollowUser($userId: ID!) {
      unfollowUser(userId: $userId) {
         name
         username
         followers {
            name
            username
         }
      }
   }
`;

export const ADD_POST = gql`
   mutation addPost($content: String!) {
      addPost(content: $content) {
         _id
         content
         username
         date
         postedBy {
            name
         }
      }
   }
`;

export const ADD_COMMENT = gql`
   mutation addComment($postId: ID!, $content: String!) {
      addComment(postId: $postId, content: $content) {
         _id
      }
   }
`;

export const REMOVE_POST = gql`
   mutation removePost($postId: ID!) {
      removePost(postId: $postId)
   }
`;

export const REMOVE_COMMENT = gql`
   mutation removeComment($commentId: ID!) {
      removeComment(commentId: $commentId)
   }
`;

export const LIKE_POST = gql`
   mutation likePost($postId: ID!) {
      likePost(postId: $postId) {
         _id
         likes {
            _id
            username
         }
      }
   }
`;
export const UNLIKE_POST = gql`
   mutation unlikePost($postId: ID!) {
      unlikePost(postId: $postId) {
         _id
         likes {
            _id
            username
         }
      }
   }
`;
export const LIKE_COMMENT = gql`
   mutation likeComment($commentId: ID!) {
      likeComment(commentId: $commentId) {
         _id
         likes {
            _id
            username
            name
         }
      }
   }
`;
export const UNLIKE_COMMENT = gql`
   mutation unlikeComment($commentId: ID!) {
      unlikeComment(commentId: $commentId) {
         _id
         likes {
            _id
            username
            name
         }
      }
   }
`;
