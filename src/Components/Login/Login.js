import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Login.modules.css'

const Login = () => {
    return (
        <div className='container mb-3'>
            <div className='text-center'>
                <img className='img-fluid' src="https://i.ibb.co/2cPq0vm/Group-1329.png" alt="Brand" />
            </div>
            <div>
                <h2 className='text-center my-5 fw-bold'>Login</h2>
                <Form className='mb-3'>
                    <Form.Group className="mb-3 col-lg-8 col-md-8 col-12 mx-auto" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-8 col-md-8 col-12 mx-auto" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-8 col-md-8 col-12 mx-auto">
                        <Link className='reset-pass' to='reset-pass'>Forgot Password?</Link>
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-8 col-md-8 col-12 mx-auto">
                        <Button className='w-100' variant="primary" type="submit">
                            Login
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
                        <img className='google' src="https://i.ibb.co/qn25rYN/google-1772223-1507807.png" alt="google" />
                        Sign in with Google
                    </Button>
                </div>

                <div className="my-3 col-lg-8 col-md-8 col-12 mx-auto">
                    <h5>New To Volunteer Network? <Link className='reset-pass' to='/signup'>Sign Up</Link></h5>
                </div>

            </div>
        </div>
    )
}

export default Login