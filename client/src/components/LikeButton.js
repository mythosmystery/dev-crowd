
import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LIKE_POST } from '../utils/mutations';
import { Button, Label } from 'semantic-ui-react';

function LikePostButton({ user, post: { id, likeCount, likes } }) {

    const [liked, setLiked] = useState(false);

    useEffect(() => {
        if (user && likes.find((like) => like.username === user.username)) {
            setLiked(true);
        } else setLiked(false);
    }, (user, likes));

    const [likePost] = useMutation(LIKE_POST, {
        variable: { postId: id }
    });


    return (
        <Button as="div" labelPosition="right" onClick={likePost}>
            <Label pointing="left">
                {likeCount}
            </Label>
        </Button>
    );

}

export default LikePostButton