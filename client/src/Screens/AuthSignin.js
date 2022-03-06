import React from "react";
import {Link} from "react-router-dom";
import {Form,Button} from "react-bootstrap";

const AuthSignin = ()=>{
    return (
        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Button variant="primary" type="submit">
                    Giriş Yap
                </Button>
            </Form.Group>

            <Button variant='primary'>
                <Link
                    className='text-white text-decoration-none'

                    to='/auth/signup'>Kayıt</Link>
            </Button>
        </Form>
    );
}

export default AuthSignin;