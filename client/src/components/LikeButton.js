import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { LIKE_POST, UNLIKE_POST } from '../utils/mutations';
import { Button } from 'react-bootstrap';

function LikeButton({ likes, id, postId }) {
   const [liked, setLiked] = useState(false);
   const [likePost] = useMutation(LIKE_POST);
   const [unlikePost] = useMutation(UNLIKE_POST);

   useEffect(() => {
      likes.forEach(({ _id }) => {
         if (_id === id) setLiked(true);
      });
   }, [likes, id]);

   const handleClick = ({ target }) => {
      if (liked) handleUnlike();
      if (!liked) handleLike();
   };

   const handleLike = async () => {
      setLiked(true);
      const { data } = await likePost({ variables: { postId } });
   };

   const handleUnlike = async () => {
      setLiked(false);
      const { data } = await unlikePost({ variables: { postId } });
   };

   return (
      <Button className="mx-3" variant={!liked ? 'primary' : 'warning'} size="sm" onClick={handleClick}>
         {!liked ? 'Like' : 'Unlike'}
      </Button>
   );
}

export default LikeButton;
