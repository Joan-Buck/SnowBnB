import React, { useEffect, } from 'react';
import ReviewCard from "./ReviewCard";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsThunk } from '../../store/reviews';


const ReviewListing = ({spotId}) => {
    const dispatch = useDispatch();

    const reviewsObj = useSelector(state => state.reviews.reviews);

    const reviews = Object.values(reviewsObj).filter(review => review.spotId === spotId);

    /* TO DO: filter for reviews by spotId and by userId */

    useEffect(() => {
        dispatch(getReviewsThunk())
    }, [dispatch]);

    return (
        <div>
            <h3>Reviews</h3>
            {/* TO DO: if not owner of this spot, add review button renders */}

            {reviews.map((review) => (
                <ReviewCard key={review.id} />
            ))}
        </div>
    )
}
export default ReviewListing
