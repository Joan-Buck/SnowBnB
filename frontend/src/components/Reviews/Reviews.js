import React, { useEffect, useState } from 'react';
import ReviewCard from "./ReviewCard";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsThunk } from '../../store/reviews';
import NewReviewForm from './NewReviewForm';


const ReviewListing = ({spot}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const reviewsObj = useSelector(state => state.reviews.reviews);
    const reviews = Object.values(reviewsObj).filter(review => +review.spotId === +spot.id);
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
                {spot.userId !== sessionUser.id && (
                <button onClick={showForm} className='add-new-review'>Add your review</button>
                )}
            </div>
            {renderForm && (
                <NewReviewForm hideForm={() => setRenderForm(false)} spotId={spot.id}/>
            )}
            {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} editable/>
            ))}
        </div>
    )
}
export default ReviewListing;
