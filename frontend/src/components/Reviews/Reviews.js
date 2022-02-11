import React, { useEffect, } from 'react';
import ReviewCard from "./ReviewCard";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsThunk } from '../../store/reviews';


const ReviewListing = () => {
    const dispatch = useDispatch();

    const reviewsObj = useSelector(state => state.reviews.reviews);

    const reviews = Object.values(reviewsObj);

    useEffect(() => {
        dispatch(getReviewsThunk())
    }, [dispatch]);

    return (
        <div>
            <h3>Reviews</h3>
            {/* TO DO: if not owner of this spot, add review button renders */}

            {/* TO DO: for each review in reviews, make a reviewcard */}
            {reviews.map((review) => (
                <ReviewCard key={review.id} />
            ))}
        </div>
    )
}
export default ReviewListing
