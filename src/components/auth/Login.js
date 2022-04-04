import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'
import "./login.css";
import checkLogin from '../../services/auth/LoginService';
import { withRouter } from "react-router-dom";

class Login extends Component {

    state = {
        username: "",
        password: "",
        errorMassage: ""
    };
    componentDidMount() {
        const userData = JSON.parse(localStorage.getItem("userData")) || undefined;
        if(typeof userData != "undefined"){
            if (userData.username && userData.username.length > 0) {
                window.location.href="/users";
            }
        }
    }

    changeUsername = (e) => {
        const username = e.target.value;
        // this.setState({
        //     username: user
        // })
        this.setState({ username }) // commented code and this code is same,
        //if i use same variable,we can assign value in this way
    }
    changePassword = (e) => {
        const password = e.target.value;
        this.setState({ password })
    }
    submitLogin = () => {
        if (checkLogin(this.state)) {
            this.setState({
                errorMassage: ""
            });
            //alert("You are successfully logged in !!");
            localStorage.setItem("userData", JSON.stringify(this.state));
            window.location.href="/users";

        } else {
            this.setState({
                errorMassage: "Sorry!! Invalid username or password"
            })
        }
    }
    render() {
        return (
            <div className='d-flex justify-content-center login-area'>
                <Card style={{ width: '30rem' }}>
                    <h3 className='text-center mt-2 mb-2'>Login to your account</h3>
                    <hr />

                    {this.state.errorMassage.length > 0 && (
                        <Alert show={true} variant="danger" className='m-2'>
                            <p>{this.state.errorMassage}</p>
                        </Alert>
                    )}
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text"
                                    placeholder="Enter your username"
                                    value={this.state.username}
                                    onChange={this.changeUsername}
                                />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.changePassword}
                                />
                            </Form.Group>

                            <div className='text-center'>
                                <Button
                                    variant="primary"
                                    type="button"
                                    className="btn btn-success btn-block"
                                    onClick={this.submitLogin}
                                >
                                    Login
                                </Button>
                            </div>

                        </Form>

                    </Card.Body>
                </Card>
            </div >
        );
    }
}

export default withRouter(Login);