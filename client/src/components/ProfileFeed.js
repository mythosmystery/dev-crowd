import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';

import FeedCard from './FeedCard';
function ProfileFeed({ posts, refetch }) {
   return (
      <>
         {posts.length > 0 ? (
            <Container>
               <h5>Your Posts</h5>
               {posts.map((post) => {
                  return <FeedCard post={post} key={post._id} refetch={refetch} />;
               })}
            </Container>
         ) : (
            <h2>No posts to show</h2>
         )}
      </>
   );
}
export default ProfileFeed;
