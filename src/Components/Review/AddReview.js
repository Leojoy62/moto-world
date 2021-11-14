import React, { useRef } from 'react';

const Review = () => {
    const nameRef = useRef();
    const reviewRef = useRef();

    const handleReview = e => {
        const name = nameRef.current.value;
        const review = reviewRef.current.value;

        const newReview = { name, review };
        fetch('https://rocky-retreat-80125.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review added')
                    e.target.reset();
                }
            })

        e.preventDefault();
    }
    return (
        <div className="my-5">
            <h1>Add Reviews</h1>
            <form onSubmit={handleReview}>
                <input type="text" placeholder="Your name" ref={nameRef} />
                <br />
                <br />
                <input type="text" placeholder="Give your feedback" ref={reviewRef} />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Review;