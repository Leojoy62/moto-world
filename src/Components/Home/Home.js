import React from 'react';
import { Carousel } from 'react-bootstrap';
import Reviews from '../Review/Reviews';

import Carusel from './Carusel/Carusel';
import Extra from './Extra/Extra';

import Services from './Services/Services';


const Home = () => {
    return (
        <>
            <Carusel></Carusel>
            <Services></Services>
            <Reviews></Reviews>
            <Extra></Extra>
        </>
    );
};

export default Home;