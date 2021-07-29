import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { Card, Button, Container } from 'react-bootstrap';
import FollowButton from './FollowButton';
function FollowingList() {
   const { data, error, loading, refetch } = useQuery(GET_ME);

   if (loading) {
      return <h2>Loading follows...</h2>;
   }
   if (error) {
      return <h2>Error</h2>;
   }

   return (
      <>
         <Container>
            <h3>Following: {data.me.following.length}</h3>
            {data.me.following.map((user) => {
               return (
                  <Card className="my-1" key={user._id}>
                     <Card.Header>
                        {user.name} - ({user.username})
                     </Card.Header>
                     <Card.Body>
                        <FollowButton id={user._id} />
                     </Card.Body>
                  </Card>
               );
            })}
            <h3>Followers: {data.me.followers.length}</h3>
            {data.me.followers.map((user) => {
               return (
                  <Card className="my-1" key={user._id}>
                     <Card.Header>
                        {user.name} - ({user.username})
                     </Card.Header>
                     <Card.Body>
                        <FollowButton id={user._id} />
                     </Card.Body>
                  </Card>
               );
            })}
         </Container>
      </>
   );
}
export default FollowingList;
