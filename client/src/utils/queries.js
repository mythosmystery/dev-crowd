import gql from 'graphql-tag';

export const GET_ME = gql`
   query me {
      me {
         _id
         username
         name
         followers {
            name
            username
            _id
         }
         following {
            name
            username
            _id
         }
      }
   }
`;
export const GET_MY_POSTS = gql`
   query myPosts {
      myPosts {
         _id
         content
         date
         username
         likes {
            _id
            username
         }
      }
   }
`;
export const NEWSFEED = gql`
   query newsfeed($usernames: [String]!) {
      newsfeed(usernames: $usernames) {
         _id
         content
         date
         username
         comments {
            _id
            content
            date
            username
            postedBy {
               _id
               name
            }
            likes {
               _id
               username
            }
         }
         postedBy {
            _id
            username
            name
         }
         likes {
            _id
            username
         }
      }
   }
`;
export const POST_BY_USER = gql`
   query postsByUser($username: String!) {
      postsByUser(username: $username) {
         _id
         content
         date
         username
         postedBy {
            _id
            name
         }
         likes {
            _id
         }
      }
   }
`;
