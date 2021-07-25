
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { LIKE_POST } from '../utils/mutations';
import { Button, Icon } from 'semantic-ui-react';

function LikePostButton({ user, post: { id, likeCount, like } }) {

    const [liked, setLiked] = useState(false);

    useEffect(() => {
        if (user && likes.find((like) => like.username === user.username)) {
            setLiked(true);
        } else setLiked(false);
    }, (user, likes));

    const [likePost] = useMutation(LIKE_POST, {
        variable: { postId: id }
    });

}