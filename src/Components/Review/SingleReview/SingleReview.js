import React from 'react';
import './SingleReview.css';

const SingleReview = (props) => {
    const { name, review } = props.review;
    return (
        <div>
            <div className="review-card">
                <h5>{name}</h5>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default SingleReview;