import React, { useEffect, useState } from 'react';
import ReviewCard from "./ReviewCard";
import { useDispatch, useSelector, useStore } from "react-redux";
import { getReviewsThunk } from '../../store/reviews';
import NewReviewForm from './NewReviewForm';


const ReviewListing = ({spotId}) => {
    const dispatch = useDispatch();

    const reviewsObj = useSelector(state => state.reviews.reviews);
    // TO DO: get out user data from reviews state
    // const userData = useSelector(state => state.reviews.reviews.User);
    // console.log(userData)
    const reviews = Object.values(reviewsObj).filter(review => +review.spotId === +spotId);

    /* TO DO: filter for reviews by spotId and by userId */

    const [renderForm, setRenderForm] = useState(false);


    useEffect(() => {
        dispatch(getReviewsThunk())
    }, [dispatch]);

    const showForm = (e) => {
        e.preventDefault();
        setRenderForm(true);
    }

    return (
        <div>
            <div className='reviews-header'>
                <h3>Reviews</h3>
            {/* TO DO: if not owner of this spot, add review button renders */}
                <button onClick={showForm} className='add-new-review'>Add your review</button>
            </div>
            {renderForm && (
                <NewReviewForm hideForm={() => setRenderForm(false)} spotId={spotId}/>
            )}
            {/* TO DO: if there are no reviews for spots, add in comment about no reviews yet */}
            {reviews.map((review) => (
                <ReviewCard key={review.id} review={review}/>
            ))}
        </div>
    )
}
export default ReviewListing;
