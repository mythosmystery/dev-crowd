import React from 'react';
import {Button, Form} from 'react-bootstrap';

function Register() {
    return (
        <div>
            <h1>Create Account</h1>
            <p>Please enter your information to create an account.</p>
            <Form>
                <Form.Group className="mb-3" controlId="formFname">
                    <Form.Label>Full Name </Form.Label>
                    <Form.Control required type="text" placeholder="Enter your name" />
                </Form.Group>
                
                {/* <Form.Group className="mb-3" controlId="formLname">
                    <Form.Label>Last Name </Form.Label>
                    <Form.Control required type="text" placeholder="Enter last name" />
                </Form.Group> */}
                
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username </Form.Label>
                    <Form.Control required type="text" placeholder="Enter username" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address </Form.Label>
                    <Form.Control required type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password </Form.Label>
                    <Form.Control required type="password" placeholder="Password" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check required type="checkbox" label="I agree to terms & service" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Register;