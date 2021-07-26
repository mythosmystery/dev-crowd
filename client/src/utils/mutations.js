import { gql } from '@apollo/client';

export const CREATE_USER = gql`
   mutation createUser($name: String!, $username: String!, $email: String!, $password: String!) {
      createUser(createInput: { name: $name, username: $username, email: $email, password: $password }) {
         id
         username
         email
         token
      }
   }
`;

export const LOGIN_USER = gql`
   mutation login($username: String!, $password: String!) {
      login(username: $username, password: $password) {
         id
         email
         name
      }
   }
`;

export const ADD_POST = gql`
   mutation createPost($content: String!) {
      createPost(content: $content) {
         id
         content
         username
         date
         likes {
            id
            username
         }
         likeCount
         comments {
            id
            content
            username
            date
         }
      }
   }
`;

export const ADD_COMMENT = gql`
   mutation ($postID: ID!, $content: String!) {
      addComment(postId: $postId, conttent: $content) {
         id
         comments {
            id
            content
            username
         }
         commentCount
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
      removeComment(commentId: $commentId) {
         id
         comments {
            id
            username
            content
         }
         commentCount
      }
   }
`;

export const LIKE_POST = gql`
   mutation likePost($postId: ID!) {
      likePost(postId: $postId) {
         id
         likes {
            id
            username
         }
         likeCount
      }
   }
`;

export const LIKE_COMMENT = gql`
   mutation likeCommnet($commentId: ID!) {
      likeComment(commentId: $commentId) {
         id
         like {
            id
            username
         }
         likeCount
      }
   }
`;
