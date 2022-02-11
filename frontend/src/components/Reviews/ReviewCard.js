import React from "react";

const ReviewCard = ({review}) => {

    return (
        <div>
            {/* TO DO: add in username for review */}
            <p className="review-details"> USERNAME PLACEHOLDER | Rating: {review.rating}</p>
            <p className="review-content">{review.content}</p>
            <div>
                <button>Edit Review</button>
                <button>Delete Review</button>
            </div>
        </div>
    )
}
export default ReviewCard
