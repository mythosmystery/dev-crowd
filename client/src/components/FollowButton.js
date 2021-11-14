import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { FOLLOW_USER, UNFOLLOW_USER } from '../utils/mutations';
import { GET_ME } from '../utils/queries';
import { Button } from 'react-bootstrap';

function FollowButton({ id }) {
   const { data, refetch } = useQuery(GET_ME);
   const [isFollowing, setIsFollowing] = useState(false);
   const [followUser] = useMutation(FOLLOW_USER);
   const [unfollowUser] = useMutation(UNFOLLOW_USER);

   useEffect(() => {
      data.me.following.forEach(({ _id }) => {
         if (_id === id) setIsFollowing(true);
      });
      return () => {};
   }, [data.me.following, id]);

   const handleClick = event => {
      if (isFollowing) handleUnfollow();
      if (!isFollowing) handleFollow();
   };

   const handleFollow = async () => {
      setIsFollowing(true);
      const res = await followUser({ variables: { userId: id } });
      if (res) refetch();
   };
   const handleUnfollow = async () => {
      setIsFollowing(false);
      const res = await unfollowUser({ variables: { userId: id } });
      if (res) refetch();
   };

   return (
      <Button
         className='mx-3'
         variant={!isFollowing ? 'outline-primary' : 'outline-danger'}
         size='sm'
         onClick={handleClick}
         disabled={data.me._id === id}
      >
         {!isFollowing ? 'Follow' : 'Unfollow'}
      </Button>
   );
}

export default FollowButton;
