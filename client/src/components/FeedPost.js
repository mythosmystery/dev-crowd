import React from 'react';
import { useMutation } from '@apollo/client';
import { POST_BY_USER } from '../utils/queries';
import { CREATE_POST } from '../utils/mutations';
import { Button, Form } from 'react-bootstrap';
import { useForm } from '../utils/hooks'

function FeedPost() {
    const { values, onChange, onSubmit } = useForm(createPostCallback, {
        content: ''
    });

    const [createPost, { error }] = useMutation(CREATE_POST, {
        variables: values,
        update(proxy, result) {
            const data = proxy.readQuery({
                query: POST_BY_USER
            });
            data.getPosts = [result.data.createPost, ...data.getPosts];
            proxy.writeQuery({ query: POST_BY_USER, data });
            values.content = ''
        }
    });

    function createPostCallback() {
        createPost();
    }

    return (
        <Form onSubmit={onSubmit}>
            <h2> Create a post:</h2>
            <Form.Group>
                <Form.Control type="content" placeholder="What's on your mind" />
                <Button type="submit" color="dark blue">
                    Submit
                </Button>

            </Form.Group>
        </Form >
    )
}

export default FeedPost;