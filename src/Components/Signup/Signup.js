import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Signup.modules.css';

const Signup = () => {
    return (
        <div className='container mb-3'>
            <div className='text-center'>
                <img className='img-fluid' src="https://i.ibb.co/2cPq0vm/Group-1329.png" alt="Brand" />
            </div>

            <div>
                <h2 className='text-center my-5 fw-bold'>Sign Up</h2>
                <Form className='mb-3'>
                    <Form.Group className="mb-3 col-lg-8 col-md-8 col-12 mx-auto" controlId="formBasicText">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-8 col-md-8 col-12 mx-auto" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-8 col-md-8 col-12 mx-auto" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-8 col-md-8 col-12 mx-auto" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-8 col-md-8 col-12 mx-auto" controlId="formBasicCheckbox">
                        <Form.Check style={{ color: 'red' }} type="checkbox" label="Accept our terms and condition" />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-8 col-md-8 col-12 mx-auto">
                        <Button className='w-100' variant="primary" type="submit">
                            Sign Up
                        </Button>
                    </Form.Group>
                </Form>

                <div className='or-container w-50 mx-auto'>
                    <div className='or'>

                    </div>
                    <p>or</p>
                    <div className='or'>

                    </div>
                </div>


                <div className="google-container my-3 col-lg-8 col-md-8 col-12 mx-auto">
                    <Button className='w-100' variant="light" type="submit">
                        <img className='google' src="https://i.ibb.co/qn25rYN/google-1772223-1507807.png" alt="googe" />
                        Sign in with Google
                    </Button>
                </div>

                <div className="my-3 col-lg-8 col-md-8 col-12 mx-auto">
                    <h5>Already Have An Account? <Link className='reset-pass' to='/login'>Login</Link></h5>
                </div>

            </div>
        </div>
    )
}

export default Signup