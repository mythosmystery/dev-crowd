import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login(props) {
   const [formState, setFormState] = useState({ email: '', password: '' });
   const [login, { error }] = useMutation(LOGIN_USER);

   const handleFormSumbit = async (event) => {
      event.preventDefault();
      try {
         console.log({ ...formState });
         const { data } = await login({
            variables: { ...formState },
         });
         const token = data.login.token;
         Auth.login(token);
      } catch (error) {
         console.log(error);
      }
   };

   const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
         ...formState,
         [name]: value,
      });
   };

   return (
      <Form onSubmit={handleFormSumbit}>
         <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control type="text" name="email" placeholder="Enter email" onChange={handleChange} value={formState.email} />
         </Form.Group>

         <Form.Group className="mb-3">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange} value={formState.password} />
         </Form.Group>
         <Button variant="primary" type="submit">
            Submit
         </Button>
      </Form>
   );
}

export default Login;
