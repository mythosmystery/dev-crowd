import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { LIKE_COMMENT, UNLIKE_COMMENT } from '../utils/mutations';
import { Button } from 'react-bootstrap';

function LikeCommentButton({ likes, id, commentId }) {
   const [liked, setLiked] = useState(false);
   const [likeComment] = useMutation(LIKE_COMMENT);
   const [unlikeComment] = useMutation(UNLIKE_COMMENT);

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
      const { data } = await likeComment({ variables: { commentId } });
   };

   const handleUnlike = async () => {
      setLiked(false);
      const { data } = await unlikeComment({ variables: { commentId } });
   };

   return (
      <Button className="mx-3" variant={!liked ? 'primary' : 'warning'} size="sm" onClick={handleClick}>
         {!liked ? 'Like' : 'Unlike'}
      </Button>
   );
}

export default LikeCommentButton;
