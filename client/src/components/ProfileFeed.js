import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';

import FeedCard from './FeedCard';
function ProfileFeed({ posts }) {
   return (
      <>
         <Container>
            <h5>Your Posts</h5>
            {posts.map((post) => {
               return <FeedCard post={post} key={post._id} />;
            })}
         </Container>
      </>
   );
}
export default ProfileFeed;
