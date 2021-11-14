import React, { useState } from 'react';
import { Alert, Button, Container, Form, Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const [loginData, setLogindata] = useState();
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLogindata(newLoginData);
    }

    const handleLogInSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <Container className="my-5">
            <Form onSubmit={handleLogInSubmit}>
                <h3>Log In</h3>
                <input type="email" placeholder="Email" name="email" onBlur={handleOnBlur} />
                <br />
                <br />
                <input type="password" placeholder="Password" name="password" onBlur={handleOnBlur} />
                <br />
                <br />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <br />
                <NavLink to='/register' className="new-to">
                    New to Moto-World? Click here to register
                </NavLink>


            </Form>
            {isLoading && <Spinner animation="border" variant="success" />}
            {user?.email && <Alert variant="success">
                Login successfully
            </Alert>}
            {authError && <Alert variant="danger">
                {authError}
            </Alert>}
        </Container>
    );
};

export default Login;