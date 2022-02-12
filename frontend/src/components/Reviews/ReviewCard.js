import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReviewThunk } from "../../store/reviews";
import EditReviewForm from "./EditReviewForm";

const ReviewCard = ({ review, editable }) => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [userOwns, setUserOwns] = useState(false);
    const [renderForm, setRenderForm] = useState(false);

    const { id, content, rating, spotId, userId } = review;

    useEffect(() => {
        if (sessionUser?.id === userId) {
            setUserOwns(true)
        }
    }, [sessionUser]);

    const showForm = (e) => {
        e.preventDefault();
        setRenderForm(true);
    }

    return (
        <div className="review-card-div">
            <p className="review-details"> {review.User?.username} | Rating: {review.rating}</p>
            <p className="review-content">{review.content}</p>
            {userOwns && (<div>
                <div className="review-buttons">
                    <button onClick={showForm}>Edit Review</button>
                {userOwns && renderForm && (
                    <EditReviewForm review={review} hideForm={() => setRenderForm(false)} />
                    )}
                    <button className="delete-review-button" onClick={() => dispatch(deleteReviewThunk(review.id))}>Delete Review</button>
                </div>
            </div>)}
        </div>
    )
}
export default ReviewCard
