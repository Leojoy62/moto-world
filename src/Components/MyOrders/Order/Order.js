import React from 'react';
import { Button } from 'react-bootstrap';

import './Order.css';

const Order = (props) => {
    const { bike, displayName, email, phone } = props.order;

    const handleDeleteOrder = id => {
        const url = `https://rocky-retreat-80125.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully')

                }
            })
    }

    return (
        <div>
            <div className="order-card">
                <h6>Bike Name : {bike}</h6>
                <p>Customer name: {displayName}</p>
                <p>Customer email: {email}</p>
                <p>Customer phone: {phone}</p>
                <Button variant="warning" onClick={() => handleDeleteOrder(props.order._id)}>Delete</Button>
            </div>
        </div>
    );
};

export default Order;