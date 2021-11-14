import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Review.css';
import SingleReview from './SingleReview/SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://rocky-retreat-80125.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div>
            <h3>Reviews: {reviews.length}</h3>
            <Container className="review">
                {
                    reviews.map(review => <SingleReview
                        key={review.name}
                        review={review}
                    ></SingleReview>)
                }
            </Container>
        </div>
    );
};

export default Reviews;