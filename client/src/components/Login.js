import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Alert, Button, Form } from 'react-bootstrap';

function Login({ route }) {
   const [formState, setFormState] = useState({ email: '', password: '' });
   const [login, { error }] = useMutation(LOGIN_USER);
   const [showErr, setShowErr] = useState(false);

   const handleFormSubmit = async event => {
      event.preventDefault();
      try {
         const { data } = await login({
            variables: { ...formState },
         });
         const token = data.login.token;
         Auth.login(token, route);
      } catch (err) {
         console.log(err);
         setShowErr(true);
      }
   };

   const handleChange = event => {
      const { name, value } = event.target;
      setFormState({
         ...formState,
         [name]: value,
      });
   };

   return (
      <Form onSubmit={handleFormSubmit}>
         <Alert variant="danger" show={showErr} closeVariant="white">
            {error?.message}
         </Alert>
         <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control type="text" name="email" placeholder="Enter email" onChange={handleChange} value={formState.email} />
         </Form.Group>

         <Form.Group className="mb-3">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange} value={formState.password} />
         </Form.Group>
         <Button disabled={!(formState.email && formState.password)} type="submit" variant="success">
            Login
         </Button>
      </Form>
   );
}

export default Login;
