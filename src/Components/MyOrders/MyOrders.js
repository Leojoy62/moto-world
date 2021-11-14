import React, { useEffect, useState } from 'react';
import './MyOrders.css';
import { Container } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Order from './Order/Order';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `https://rocky-retreat-80125.herokuapp.com/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    return (
        <div>
            <h1>My Orders: {orders.length}</h1>
            <Container className="my-orders my-5">
                {
                    orders.map(order => <Order

                        key={order.name}
                        order={order}
                    ></Order>)
                }
            </Container>

        </div>
    );
};

export default MyOrders;