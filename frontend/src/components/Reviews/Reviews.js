import React, { useEffect, useState } from 'react';
import ReviewCard from "./ReviewCard";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsThunk } from '../../store/reviews';
import NewReviewFormModal from './NewReviewFormModal';
import './Reviews.css';

const ReviewListing = ({ spot }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const reviewsObj = useSelector(state => state.reviews.reviews);
    const reviews = Object.values(reviewsObj).filter(review => +review.spotId === +spot.id).sort((a, b) => {
        const aDate = new Date(a.updatedAt)
        const bDate = new Date(b.updatedAt)
        return (bDate - aDate)
    });
    const [renderForm, setRenderForm] = useState(false);

    const reviewerId = reviews.map(review => +review.userId)
    const userReviewed = reviewerId.includes(+sessionUser.id)

    const ratings = reviews.map(review => review.rating)
    const sumRatings = function (array) {
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            total += array[i]
        }
        return total;
    }
    const rawAverageRating = sumRatings(ratings) / ratings.length
    const averageRating = rawAverageRating.toFixed(1);


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
                {ratings.length > 0 &&
                    <div className='spot-detail-avg-rating'>Average Rating: {averageRating}</div>
                }
                {spot.userId !== sessionUser.id && !userReviewed && (
                     <NewReviewFormModal />
                )}
            </div>
            {/* {renderForm && ( */}

                {/* // <NewReviewForm hideForm={() => setRenderForm(false)} spotId={spot.id} /> */}
            {/* )} */}
            {reviews.map((review, i) => (
                <div key={`${i}`} className='single-review-container'>
                    <ReviewCard key={review.id} review={review} editable />
                </div>
            ))}
        </div>
    )
}
export default ReviewListing;
