import { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap"
import { login } from "../../services/apiService";
import axios_instance from "../../services/axios_instance";

const Login = ()=>{
    const [user,setUser] = useState({});
    const handleInput = (e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    const submitForm = async (e)=>{
        e.preventDefault();
        // await axios_instance.get("/api/category");
        const data = await login(user);
        console.log(data);
        // dispatch -> jwt
        
        // check axios
        axios_instance.get("/api/category");
    }
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>   
                <h1>Login</h1>
                    <Form onSubmit={submitForm} method="post">
                        <InputGroup className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={user.email} onChange={handleInput} name="email" type="email"/>
                        </InputGroup>
                        <InputGroup>
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={user.password} onChange={handleInput}  name="password" type="password"/>
                        </InputGroup>
                        <Button type="submit" variant="primary">Login</Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}
export default Login;