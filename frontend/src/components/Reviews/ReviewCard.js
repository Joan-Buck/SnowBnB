import React from "react";
import { useDispatch } from "react-redux";
import { deleteReviewThunk } from "../../store/reviews";

const ReviewCard = ({review}) => {
    const dispatch = useDispatch();

    return (
        <div>
            {/* TO DO: add in username for review */}
            <p className="review-details"> USERNAME PLACEHOLDER | Rating: {review.rating}</p>
            <p className="review-content">{review.content}</p>
            <div>
                <button>Edit Review</button>
                <button className="delete-review-button" onClick={() => dispatch(deleteReviewThunk(review.id))}>Delete Review</button>
            </div>
        </div>
    )
}
export default ReviewCard
