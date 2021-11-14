import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import MyOrders from '../MyOrders/MyOrders';
import './Dashboard.css';

const Dashboard = () => {
    const { logOut } = useAuth();
    return (
        <div className="dashboard-container my-5">
            <div className="sec-1 col-md-3">
                <NavLink to='/orders' style={{ textDecoration: "none" }}>
                    <h4>My Orders</h4>
                </NavLink>
                <NavLink to='/pay' style={{ textDecoration: "none" }}>
                    <h4 >Pay</h4>
                </NavLink>
                <NavLink to='/addreview' style={{ textDecoration: "none" }}>
                    <h4>Review</h4>
                </NavLink>
                <Nav.Link onClick={logOut}><h4>Logout</h4></Nav.Link>
            </div>
            <div className="col-md-9">

                <MyOrders></MyOrders>
            </div>
        </div>
    );
};

export default Dashboard;