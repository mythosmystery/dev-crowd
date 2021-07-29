import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { Card } from 'react-bootstrap';
function FollowingList() {
   const { data, error, loading } = useQuery(GET_ME);
   const following = data?.me.following;
   const followers = data?.me.followers;
   if (loading) {
      return <h2>Loading follows...</h2>;
   }
   if (error) {
      return <h2>Error</h2>;
   }
   return (
      <>
         <h3>Following: {following.length}</h3>
         {following.map((user) => {
            console.log(user);
            return (
               <Card className="my-1" key={user._id}>
                  <Card.Header>{user.name}</Card.Header>
                  <Card.Title className="m-2">{user.username}</Card.Title>
               </Card>
            );
         })}
         <h3>Followers: {followers.length}</h3>
         {followers.map((user) => {
            return (
               <Card className="my-1" key={user._id}>
                  <Card.Header>{user.name}</Card.Header>
                  <Card.Title className="m-2">{user.username}</Card.Title>
               </Card>
            );
         })}
      </>
   );
}
export default FollowingList;
