import gql from 'graphql-tag';

export const GET_ME = gql`
   {
      me {
         _id
         username
         name
         followers {
            username
            _id
         }
         following {
            username
            _id
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
