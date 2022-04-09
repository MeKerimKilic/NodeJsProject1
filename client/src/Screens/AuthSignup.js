import React, {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {register} from "../axios";

const AuthSignup = ()=>{
    const [formData , setFormData] = useState({
        username:'',
        email:'',
        password:'',
        fullName:'',
        phoneNumber:''

    });
    return (
        <Container>
            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    <Form onSubmit={(e)=>{
                        e.preventDefault();

                        register(formData).then((res) =>console.log(res.data.user)).catch((err)=>console.error(err.response.data.message));
                    }}>
                        <Form.Group className="mb-3" >
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" onChange={(e) => setFormData({ ...formData, username:e.target.value})} placeholder="Enter username" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" onChange={(e) => setFormData({ ...formData, email:e.target.value})} placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" onChange={(e) => setFormData({ ...formData, fullName:e.target.value})} placeholder="Enter fullname" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" onChange={(e) => setFormData({ ...formData, phoneNumber:e.target.value})} placeholder="Enter phone number" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={(e) => setFormData({ ...formData, password:e.target.value})} placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="d-grid">
                            <Button type="submit" variant="primary" size="lg">
                                Kayıt Ol
                            </Button>
                            <Form.Text className="text-center mt2">
                                Do have an account <Link to='/auth/signin'>Sign In</Link>
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

        </Container>

    );
}

export default AuthSignup;