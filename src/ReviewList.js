import React from 'react';
import Review from './Review';


export default function ReviewList(props) {
    const {reviews } = props;

    // map over the reviews array and create Review components to display
    return (
        <div className="container text-center mt-3">
            <h4 className="text-center">Reviews:</h4>
            <ul className="row">
                {reviews.map((review, index) => (
                    <Review key={index} text={review} />
                ))}
            </ul>
        </div>
    );
}