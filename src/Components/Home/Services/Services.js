import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://rocky-retreat-80125.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="my-5">
            <h3><b>Latest Bikes:</b></h3>
            <Container className="service my-5">

                {
                    services.slice(0, 6).map(service => <Service
                        key={service.key}
                        service={service}
                    ></Service>)
                }
            </Container>
        </div>
    );
};

export default Services;