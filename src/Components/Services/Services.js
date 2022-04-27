import React from 'react'

const Services = ({ service }) => {
    const { title, img } = service;
    return (
        <div className='col-lg-3 col-md-6 col-12 mb-3'>
            <div>
                <img className='img-fluid' src={img} alt="service" />
                <h4 className='text-center my-3'>{title}</h4>
            </div>
        </div>
    )
}

export default Services