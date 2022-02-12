import React, { useEffect, useState } from 'react';
import ReviewCard from "./ReviewCard";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsThunk } from '../../store/reviews';
import NewReviewForm from './NewReviewForm';


const ReviewListing = ({spotId}) => {
    const dispatch = useDispatch();
    const [userOwns, setUserOwns] = useState(false);
    const sessionUser = useSelector(state => state.session.user);

    const reviewsObj = useSelector(state => state.reviews.reviews);
    // TO DO: get username and userId from reviews data
    const reviews = Object.values(reviewsObj).filter(review => +review.spotId === +spotId);
    // const userSpot = Object.values(reviewsObj).filter(review => review.User.username === sessionUser.username)


    // console.log('user >', user);

    const [renderForm, setRenderForm] = useState(false);


    useEffect(() => {
        dispatch(getReviewsThunk())
    }, [dispatch]);

    // useEffect(() => {
    //     if (sessionUser?.id === userId) {
    //         setUserOwns(true)
    //     }
    // }, [sessionUser]);

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
            {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} editable/>
            ))}
        </div>
    )
}
export default ReviewListing;
