
import React from 'react';
import { Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import './Service.css';

const Service = (props) => {
    const { name, img, description, price } = props.service
    return (
        <>
            <div className="service">

                <div className="service-card">
                    <img src={img} alt="" />
                    <p><b className="service-name">{name}</b></p>
                    <p><b>Price: {price}</b></p>
                    <p>{description}</p>

                    <Link to="/placeorder">
                        <Button variant="warning">Buy Now</Button>
                    </Link>

                </div>

            </div>

        </>
    );
};

export default Service;