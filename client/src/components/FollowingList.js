import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { FOLLOW_USER, UNFOLLOW_USER } from '../utils/mutations';
import { Card, Button, Container } from 'react-bootstrap';
function FollowingList() {
   const { data, error, loading, refetch } = useQuery(GET_ME);
   const [followUser] = useMutation(FOLLOW_USER);
   const [unfollowUser] = useMutation(UNFOLLOW_USER);

   if (loading) {
      return <h2>Loading follows...</h2>;
   }
   if (error) {
      return <h2>Error</h2>;
   }

   const handleFollow = async (event) => {
      const res = await followUser({ variables: { userId: event.target.value } });
      if (res) refetch();
   };
   const handleUnfollow = async (event) => {
      const res = await unfollowUser({ variables: { userId: event.target.value } });
      if (res) refetch();
   };

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
                        <Button variant="danger" onClick={handleUnfollow} value={user._id}>
                           unfollow
                        </Button>
                     </Card.Body>
                  </Card>
               );
            })}
            <h3>Followers: {data.me.followers.length}</h3>
            {data.me.followers.map((user) => {
               let isFollowing = false;
               data.me.following.forEach((followedUser) => {
                  if (followedUser._id === user._id) isFollowing = true;
               });
               return (
                  <Card className="my-1" key={user._id}>
                     <Card.Header>
                        {user.name} - ({user.username})
                     </Card.Header>
                     <Card.Body>
                        <Button onClick={handleFollow} value={user._id} disabled={isFollowing}>
                           Follow
                        </Button>
                     </Card.Body>
                  </Card>
               );
            })}
         </Container>
      </>
   );
}
export default FollowingList;
