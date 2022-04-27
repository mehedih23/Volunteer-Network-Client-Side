import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import Services from '../Services/Services'

const Home = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/services')
            .then(res => setServices(res.data))
    }, [])

    return (
        <div className='container'>
            <div>
                <h1 className='text-center my-3'>I GROW BY HELPING PEOPLE IN NEED</h1>
                <InputGroup className="mb-3 w-50 mx-auto search-box">
                    <FormControl
                        placeholder="Search"
                        aria-label="Recipient's username"
                        aria-describedby="search-btn"
                    />
                    <Button className='btn-primary' id="search-btn">
                        Search
                    </Button>
                </InputGroup>
            </div>

            <div className='row'>
                {
                    services.map(service => <Services
                        key={service._id}
                        service={service}
                    ></Services>)
                }
            </div>

        </div>
    )
}

export default Home