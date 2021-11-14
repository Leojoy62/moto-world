
import React, { useState } from 'react';
import { Alert, Button, Container, Form, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const { user, registerUser, isLoading, authError } = useAuth();
    const [loginData, setLogindata] = useState();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;

        setLogindata(newLoginData);
    }

    const handleLogInSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password Did Not Match')
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container className="my-5">
            {!isLoading && <Form onSubmit={handleLogInSubmit}>
                <h3>Register</h3>
                <input placeholder="Your name" name="name" onBlur={handleOnBlur} />
                <br />
                <br />
                <input type="email" placeholder="Email" name="email" onBlur={handleOnBlur} />
                <br />
                <br />
                <input type="password" placeholder="Password" name="password" onBlur={handleOnBlur} />
                <br />
                <br />
                <input type="password" placeholder="Re-type password" name="password2" onBlur={handleOnBlur} />
                <br />
                <br />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <br />
                <NavLink to='/login' className="new-to">
                    Already registered? Click here to login
                </NavLink>


            </Form>}
            {isLoading && <Spinner animation="border" variant="success" />}
            {user?.email && <Alert variant="success">
                Registered successfully
            </Alert>}
            {authError && <Alert variant="danger">
                {authError}
            </Alert>}
        </Container>
    );
};

export default Register;