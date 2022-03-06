import React from "react";
import {Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

const AuthSignup = ()=>{

    return (
        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter fullname" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter phone number" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Button variant="primary" type="submit">
                    Kayıt Ol
                </Button>
            </Form.Group>

            <Button variant='primary'>
                <Link
                    className='text-white text-decoration-none'

                    to='/auth/signin'>Giriş</Link>
            </Button>
        </Form>
    );
}

export default AuthSignup;