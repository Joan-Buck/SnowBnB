import React from "react";
import { useState } from "react";
import EditReviewForm from "./EditReviewForm";

const ReviewCard = ({review, editable}) => {
    const [userOwns, setUserOwns] = useState(false);

    return (
        <div>
            {/* TO DO: add in username for review */}
            <p className="review-details"> USERNAME PLACEHOLDER | Rating: {review.rating}</p>
            <p className="review-content">{review.content}</p>
            {userOwns && editable && (
                <div className='review-buttons'>
                    <EditReviewForm review={review} />
                    <button className='delete-review-button'
                        // TO DO: add onclick for dispatch(deleteReviewThunk(id))
                    >Delete Review</button>
                </div>
            )}
        </div>
    )
}
export default ReviewCard
