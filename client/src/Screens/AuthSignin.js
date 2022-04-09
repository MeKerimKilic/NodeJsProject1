import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Form, Button, Row, Col, Container} from "react-bootstrap";
import {login} from "../axios";
const AuthSignin = ({setUser})=>{
    const [formData , setFormData] = useState({
        username:'',
        password:''
    });
    const navigate= useNavigate();
    return (
        <Container>
            <Row className='justify-content-center'>
                <Col  xs={12} md={6}>
                    <Form onSubmit={(e)=>{
                        e.preventDefault();

                        login(formData).then((res) =>{
                            localStorage.setItem('user',JSON.stringify(res.data.user));
                            setUser(res.data.user);
                            navigate('/');
                        }).catch((err)=>console.error(err.response.data.message));
                    }}>
                        <Form.Group className="mb-3" >
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" onChange={(e) => setFormData({ ...formData, username:e.target.value})} placeholder="Enter username" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={(e) => setFormData({ ...formData, password:e.target.value})} placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="d-grid">
                            <Button type="submit" variant="primary" size="lg">
                                Giriş Yap
                            </Button>
                            <Form.Text className="text-center mt2">
                                Don't have an account <Link to='/auth/signup'>Sign Up</Link>
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

        </Container>

    );
}

export default AuthSignin;