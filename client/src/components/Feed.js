import React from 'react';
import FeedCard from './FeedCard';
import { useQuery } from '@apollo/client';
import { NEWSFEED } from '../utils/queries';
import { Container } from 'react-bootstrap';
function Feed({ user }) {
   const usernames = user.following.map(({ username }) => username);
   const { data, loading, refetch } = useQuery(NEWSFEED, { variables: { usernames } });
   if (loading) {
      return <h2>Loading...</h2>;
   }
   return (
      <>
         <Container>
            <h2>Newsfeed:</h2>
            {data.newsfeed.map((post) => {
               return <FeedCard post={post} key={post._id} refetch={refetch} />;
            })}
         </Container>
      </>
   );
}
export default Feed;
