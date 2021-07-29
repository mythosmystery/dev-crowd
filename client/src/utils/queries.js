import gql from 'graphql-tag';

export const GET_ME = gql`
   query me {
      me {
         _id
         username
         name
         email
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
export const SEARCH_USER = gql`
   query searchUser($username: String!) {
      searchUser(username: $username) {
         _id
         username
         name
         email
         following {
            _id
            name
            username
         }
         followers {
            _id
            name
            username
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
            postedOn {
               _id
            }
            postedBy {
               _id
               name
            }
            likes {
               _id
               username
               name
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
            name
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
         comments {
            _id
            content
            date
            username
            likes {
               _id
               name
            }
            postedOn {
               _id
            }
            postedBy {
               _id
               name
            }
         }
         postedBy {
            _id
            name
         }
         likes {
            _id
            name
         }
      }
   }
`;
