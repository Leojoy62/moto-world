import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const PlaceOrder = () => {

    const { user } = useAuth();

    const initialInfo = { bike: '', customerName: user.displayName, email: user.email, phone: '' }

    const [orderInfo, setOrderInfo] = useState(initialInfo)
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        console.log(newInfo)
        newInfo[field] = value;
        setOrderInfo(newInfo);
    }

    const handleOrderSubmit = e => {
        const order = {
            ...orderInfo,



        }
        fetch('https://rocky-retreat-80125.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        e.preventDefault();
    }

    return (
        <div className="my-5">
            <h5>Place Order</h5>
            <form onSubmit={handleOrderSubmit}>
                <input type="text" onBlur={handleOnBlur} name="bike" placeholder="Bike Name" />
                <br />
                <br />
                <input type="text" onBlur={handleOnBlur} name="displayName" defaultValue={user.displayName} />
                <br />
                <br />
                <input type="text" onBlur={handleOnBlur} name="email" defaultValue={user.email} />
                <br />
                <br />
                <input type="text" onBlur={handleOnBlur} name="phone" placeholder="Your Phone Number" />
                <br />
                <br />
                <Button variant="primary" type="submit">
                    Place Order
                </Button>
            </form>
        </div>
    );
};

export default PlaceOrder;