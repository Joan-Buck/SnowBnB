import React, { useEffect, useState } from 'react';
import ReviewCard from "./ReviewCard";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsThunk } from '../../store/reviews';
import NewReviewForm from './NewReviewForm';


const ReviewListing = ({spot}) => {
    const dispatch = useDispatch();
    const [userOwns, setUserOwns] = useState(false);
    const sessionUser = useSelector(state => state.session.user);

    const reviewsObj = useSelector(state => state.reviews.reviews);
    // TO DO: if current user, owns the spot > hide add review button
        // spot Id > passed in as prop
        // userId > get from session
        // Spot's userId

    const reviews = Object.values(reviewsObj).filter(review => +review.spotId === +spot.id);
    // const userSpot = Object.values(reviewsObj).filter(review => review.User.id === sessionUser.id)
    // reviews.map(review => )
    let SpotUserId = reviews.filter(review => +review.Spot.userId === +sessionUser.id)
    console.log('spotuserID >', SpotUserId);

    const [renderForm, setRenderForm] = useState(false);


    useEffect(() => {
        dispatch(getReviewsThunk())
    }, [dispatch]);


    // if session user id is same as user id for spot
    // useEffect(() => {
    //     if (sessionUser?.id === user[0]?.id) {
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
