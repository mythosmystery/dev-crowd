import React from 'react';
import { useMutation } from '@apollo/client';
import { POST_BY_USER } from '../utils/queries';
import { ADD_POST } from '../utils/mutations';
import { Button, Form } from 'react-bootstrap';
import { useForm } from '../utils/hooks';

function FeedPost() {
   const [addPost, { error }] = useMutation(ADD_POST);

   const handleFormSubmit = async () => {
      try {
         const { data } = await addPost({ variables: { ...formState } });
         console.log(data);
      } catch (err) {
         console.error(err);
      }
   };

   const { formState, onChange, onSubmit } = useForm(handleFormSubmit);

   return (
      <Form onSubmit={onSubmit}>
         <h2> Create a post:</h2>
         <Form.Group>
            <Form.Control type="content" placeholder="What's on your mind" name="content" value={formState.content} onChange={onChange} />
            <Button type="submit" color="dark blue">
               Submit
            </Button>
         </Form.Group>
      </Form>
   );
}

export default FeedPost;
