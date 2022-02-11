import React from "react";

const ReviewCard = ({review}) => {

    return (
        <div>
            <h3>{review.content}</h3>
            <div className="review-details">UserName | Rating</div>
            <div className="review-content">REVIEW CONTENT DETAILS............</div>
            <div>
                <button>Edit Review</button>
                <button>Delete Review</button>
            </div>
        </div>
    )
}
export default ReviewCard
