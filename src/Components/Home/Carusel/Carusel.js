import React from 'react';
import { Carousel } from 'react-bootstrap';

const Carusel = () => {
    return (
        <>
            <Carousel className="banner">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/originals/8c/b0/2b/8cb02bf54c0246263e5011d9abf189b3.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.wallpapersafari.com/46/65/exUjCh.jpg"
                        alt="Second slide"
                    />

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://wallpaperaccess.com/full/3132713.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Carusel;